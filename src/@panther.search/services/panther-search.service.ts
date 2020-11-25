import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { SearchCriteria } from './../models/search-criteria';
import { saveAs } from 'file-saver';
import { GenePage } from './../models/gene-page';
import { SearchHistory } from './../models/search-history';
import { PantherDataService } from '@panther.common/services/panther-data.service';
import { PantherSearchMenuService } from './search-menu.service';

@Injectable({
    providedIn: 'root'
})
export class PantherSearchService {

    searchHistory: SearchHistory[] = [];
    states: any[] = [];

    onSearchCriteriaChanged: BehaviorSubject<any>;
    onSearchHistoryChanged: BehaviorSubject<any>;
    curieUtil: any;
    genes: any[] = [];
    genePage: GenePage;
    searchCriteria: SearchCriteria;
    searchApi = environment.pantherApi;
    separator = '@@';
    loading = false;
    onGenesChanged: BehaviorSubject<any>;
    onGenesPageChanged: BehaviorSubject<any>;
    onContributorFilterChanged: BehaviorSubject<any>;
    searchSummary: any = {};

    filterType = {
        ids: 'ids',
        titles: 'titles',
        gps: 'gps',
        terms: 'terms',
    };

    constructor(
        private httpClient: HttpClient,
        private pantherDataService: PantherDataService,
        private pantherSearchMenuService: PantherSearchMenuService) {
        this.onGenesChanged = new BehaviorSubject([]);
        this.onGenesPageChanged = new BehaviorSubject(null);
        this.onSearchHistoryChanged = new BehaviorSubject(null);
        this.searchCriteria = new SearchCriteria();
        this.onSearchCriteriaChanged = new BehaviorSubject(null);

        this.onSearchCriteriaChanged.subscribe((searchCriteria: SearchCriteria) => {
            if (!searchCriteria) {
                return;
            }

            this.getGenes(searchCriteria).subscribe((response: any) => {
                this.genes = response;
                this.onGenesChanged.next(this.genes);
            });

            this.getGenesCount(searchCriteria).subscribe((response: any) => {
                this.genePage = new GenePage();
                this.genePage.total = response.n;
                this.onGenesPageChanged.next(this.genePage);
            });

            this.pantherSearchMenuService.resetResults();
        });
    }

    // Get Users and Groups
    setup() {
        const self = this;
        // this.updateSearch();
    }

    search(searchCriteria) {
        this.searchCriteria = new SearchCriteria();

        searchCriteria.title ? this.searchCriteria.titles.push(searchCriteria.title) : null;
        searchCriteria.term ? this.searchCriteria.terms.push(searchCriteria.term) : null;
        searchCriteria.id ? this.searchCriteria.ids.push(searchCriteria.id) : null;
        searchCriteria.gp ? this.searchCriteria.gps.push(searchCriteria.gp) : null;

        this.updateSearch();

    }

    getPage(pageNumber: number, pageSize: number) {
        this.searchCriteria.genePage.pageNumber = pageNumber;
        this.searchCriteria.genePage.size = pageSize;
        this.updateSearch();
    }


    updateSearch(save: boolean = true) {
        this.searchCriteria.updateFiltersCount();
        this.onSearchCriteriaChanged.next(this.searchCriteria);

        if (save) {
            this.saveHistory();
        }
    }

    filter(filterType, filter) {
        this.searchCriteria[filterType].push(filter);
        this.updateSearch();
    }

    removeFilterType(filterType: string) {
        this.searchCriteria[filterType] = [];
        this.updateSearch();
    }

    removeFilter(filterType) {
        this.searchCriteria[filterType] = null;
    }

    clearSearchCriteria() {
        this.searchCriteria = new SearchCriteria();
        this.updateSearch();
    }

    saveHistory() {
        const searchHistoryItem = new SearchHistory(this.searchCriteria);
        this.searchHistory.unshift(searchHistoryItem);

        this.onSearchHistoryChanged.next(this.searchHistory);
    }

    clearHistory() {
        this.searchHistory = [];
        this.onSearchHistoryChanged.next(this.searchHistory);
    }

    downloadSearchConfig() {
        const blob = new Blob([JSON.stringify(this.searchCriteria, undefined, 2)], { type: 'application/json' });
        saveAs(blob, 'search-filter.json');
    }


    getGenes(searchCriteria: SearchCriteria): Observable<any> {
        const self = this;
        const query = searchCriteria.build();
        const url = `${this.searchApi}/models?${query}`;

        self.loading = true;

        return this.httpClient
            .get(url)
            .pipe(
                map(res => this.addGene(res)),
                finalize(() => {
                    self.loading = false;
                })
            );
    }

    getGenesCount(searchCriteria: SearchCriteria): Observable<any> {
        const self = this;
        const query = searchCriteria.build();
        const url = `${this.searchApi}/models?${query}&count`;

        return this.httpClient
            .get(url)
            .pipe();
    }

    addGene(res) {
        const self = this;
        const result = [];

        res.models.forEach((response) => {
            const modelId = response.id;

            //result.push(gene);
        });

        return result;
    }

    public filterStates(value: string): any[] {
        const filterValue = value.toLowerCase();

        return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
    }

}
