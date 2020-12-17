import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { SearchCriteria } from './../models/search-criteria';
import { saveAs } from 'file-saver';
import { SearchHistory } from './../models/search-history';
import { PantherDataService } from '@panther.common/services/panther-data.service';
import { PantherSearchMenuService } from './search-menu.service';
import { GenePage } from '@panther.search/models/gene';
import { FamilyPage } from '@panther.search/models/family';
import { CategoryPage } from '@panther.search/models/category';
import { PathwayPage } from '@panther.search/models/pathway';

@Injectable({
    providedIn: 'root'
})
export class PantherSearchService {

    searchHistory: SearchHistory[] = [];
    states: any[] = [];

    onSearchCriteriaChanged: BehaviorSubject<any>;
    onSearchHistoryChanged: BehaviorSubject<any>;
    curieUtil: any;
    genePage: GenePage = new GenePage();
    familyPage: FamilyPage = new FamilyPage();
    pathwayPage: PathwayPage = new PathwayPage();
    categoryPage: CategoryPage = new CategoryPage();
    searchCriteria: SearchCriteria;
    searchApi = environment.pantherSearchApi;
    separator = '@@';
    loading = false;
    onGenesPageChanged: BehaviorSubject<any>;
    onFamiliesPageChanged: BehaviorSubject<any>;
    onCategoriesPageChanged: BehaviorSubject<any>;
    onPathwaysPageChanged: BehaviorSubject<any>;
    onContributorFilterChanged: BehaviorSubject<any>;
    searchSummary: any = {};

    filterType = {
        ids: 'ids',
        keywords: 'keywords',
        gps: 'gps',
        terms: 'terms',
        mfs: 'mfs',
        bps: 'bps',
        ccs: 'ccs',
        pcs: 'pcs',
        organisms: 'organisms'
    };

    constructor(
        private httpClient: HttpClient,
        private pantherDataService: PantherDataService,
        private pantherSearchMenuService: PantherSearchMenuService) {
        this.onGenesPageChanged = new BehaviorSubject(null);
        this.onFamiliesPageChanged = new BehaviorSubject(null);
        this.onPathwaysPageChanged = new BehaviorSubject(null);
        this.onCategoriesPageChanged = new BehaviorSubject(null);
        this.onSearchHistoryChanged = new BehaviorSubject(null);
        this.searchCriteria = new SearchCriteria();
        this.onSearchCriteriaChanged = new BehaviorSubject(null);

        this.onSearchCriteriaChanged.subscribe((searchCriteria: SearchCriteria) => {
            if (!searchCriteria) {
                return;
            }

            this.getGenes(searchCriteria).subscribe((response: any) => {
                this.genePage.size = 50;
                this.genePage.genes = response;
                this.onGenesPageChanged.next(this.genePage);
            });

            this.getGenesCount(searchCriteria).subscribe((response: any) => {
                this.genePage.total = response.count;
                this.onGenesPageChanged.next(this.genePage);
            });

            this.getFamilies(searchCriteria).subscribe((response: any) => {

                this.familyPage.size = 50;
                this.familyPage.families = response;
                this.onFamiliesPageChanged.next(this.familyPage);
            });

            this.getFamiliesCount(searchCriteria).subscribe((response: any) => {
                this.familyPage.total = response.count;
                this.onFamiliesPageChanged.next(this.familyPage);
            });

            this.getPathways(searchCriteria).subscribe((response: any) => {
                this.pathwayPage.size = 50;
                this.pathwayPage.pathways = response;
                this.onPathwaysPageChanged.next(this.pathwayPage);
            });

            this.getPathwaysCount(searchCriteria).subscribe((response: any) => {
                this.pathwayPage.total = response.count;
                this.onPathwaysPageChanged.next(this.pathwayPage);
            });

            this.getCategories(searchCriteria).subscribe((response: any) => {
                this.categoryPage.total = 50;
                this.categoryPage.size = 50;
                this.categoryPage.categories = response;

                this.onCategoriesPageChanged.next(this.categoryPage);
            });

            this.getCategoriesCount(searchCriteria).subscribe((response: any) => {
                this.categoryPage.total = response.count;
                this.onCategoriesPageChanged.next(this.categoryPage);
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

        searchCriteria.keyword ? this.searchCriteria.keywords.push(searchCriteria.keyword) : null;
        searchCriteria.term ? this.searchCriteria.terms.push(searchCriteria.term) : null;
        searchCriteria.mf ? this.searchCriteria.mfs.push(searchCriteria.mf) : null;
        searchCriteria.bp ? this.searchCriteria.bps.push(searchCriteria.bp) : null;
        searchCriteria.cc ? this.searchCriteria.ccs.push(searchCriteria.cc) : null;
        searchCriteria.pc ? this.searchCriteria.ccs.push(searchCriteria.pc) : null;
        searchCriteria.id ? this.searchCriteria.ids.push(searchCriteria.id) : null;
        searchCriteria.gp ? this.searchCriteria.gps.push(searchCriteria.gp) : null;
        searchCriteria.organism ? this.searchCriteria.organisms.push(searchCriteria.organism) : null;

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
        const url = `${this.searchApi}/genes?${query}`;

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
        const url = `${this.searchApi}/genes?${query}&count=true`;

        return this.httpClient
            .get(url)
            .pipe();
    }

    addGene(res) {
        const self = this;
        const result = [];

        // This will be filled with goodies
        res.results.forEach((response) => {
            const modelId = response.id;

            result.push(response);
        });

        return result;
    }

    // Families

    getFamilies(searchCriteria: SearchCriteria): Observable<any> {
        const self = this;
        const query = searchCriteria.build();
        const url = `${this.searchApi}/families?${query}`;

        self.loading = true;

        return this.httpClient
            .get(url)
            .pipe(
                map(res => this.addFamily(res)),
                finalize(() => {
                    self.loading = false;
                })
            );
    }

    getFamiliesCount(searchCriteria: SearchCriteria): Observable<any> {
        const self = this;
        const query = searchCriteria.build();
        const url = `${this.searchApi}/families?${query}&count=true`;

        return this.httpClient
            .get(url)
            .pipe();
    }

    addFamily(res) {
        const self = this;
        const result = [];

        // This will be filled with goodies
        res.results.forEach((response) => {
            const modelId = response.id;

            result.push(response);
        });

        return result;
    }

    // Pathway
    getPathways(searchCriteria: SearchCriteria): Observable<any> {
        const self = this;
        const query = searchCriteria.build();
        const url = `${this.searchApi}/pathways?${query}`;

        self.loading = true;

        return this.httpClient
            .get(url)
            .pipe(
                map(res => this.addPathway(res)),
                finalize(() => {
                    self.loading = false;
                })
            );
    }

    getPathwaysCount(searchCriteria: SearchCriteria): Observable<any> {
        const self = this;
        const query = searchCriteria.build();
        const url = `${this.searchApi}/pathways?${query}&count=true`;

        return this.httpClient
            .get(url)
            .pipe();
    }

    addPathway(res) {
        const self = this;
        const result = [];

        // This will be filled with goodies
        res.results.forEach((response) => {
            const modelId = response.id;

            result.push(response);
        });

        return result;
    }


    getCategories(searchCriteria: SearchCriteria): Observable<any> {
        const self = this;
        const query = searchCriteria.build();
        const url = `${this.searchApi}/categories?${query}`;

        self.loading = true;

        return this.httpClient
            .get(url)
            .pipe(
                map(res => this.addCategory(res)),
                finalize(() => {
                    self.loading = false;
                })
            );
    }

    getCategoriesCount(searchCriteria: SearchCriteria): Observable<any> {
        const self = this;
        const query = searchCriteria.build();
        const url = `${this.searchApi}/categories?${query}&count=true`;

        return this.httpClient
            .get(url)
            .pipe();
    }

    addCategory(res) {
        const self = this;
        const result = [];

        // This will be filled with goodies
        res.results.forEach((response) => {
            const modelId = response.id;

            result.push(response);
        });

        return result;
    }

    public filterStates(value: string): any[] {
        const filterValue = value.toLowerCase();

        return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
    }

}
