import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { startWith, map, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { PantherFormConfigService, PantherUserService } from 'panther-form-base';
import { PantherLookupService } from 'panther-form-base';
import { PantherSearchService } from './../..//services/panther-search.service';
import { PantherSearchMenuService } from '../../services/search-menu.service';

@Component({
  selector: 'panther-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})

export class SearchFormComponent implements OnInit, OnDestroy {
  searchCriteria: any = {};
  searchForm: FormGroup;
  selectedOrganism = {};
  searchFormData: any = [];
  cams: any[] = [];

  filteredOrganisms: Observable<any[]>;
  filteredGroups: Observable<any[]>;
  filteredContributors: Observable<any[]>;

  private _unsubscribeAll: Subject<any>;

  constructor(
    public pantherUserService: PantherUserService,
    public pantherSearchMenuService: PantherSearchMenuService,
    public pantherFormConfigService: PantherFormConfigService,
    private pantherLookupService: PantherLookupService,
    private pantherSearchService: PantherSearchService) {
    this.searchForm = this.createAnswerForm();

    this._unsubscribeAll = new Subject();


    this.onValueChanges();
  }

  ngOnInit(): void { }

  createAnswerForm() {
    return new FormGroup({
      title: new FormControl(),
      gp: new FormControl(),
      term: new FormControl(),
      pmid: new FormControl(),
      contributor: new FormControl(),
      group: new FormControl(),
      organism: new FormControl(),
    });
  }

  onValueChanges() {
    const self = this;

    this.searchForm.get('term').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(400)
    ).subscribe(data => {

    });

    this.searchForm.get('gp').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(400)
    ).subscribe(data => {

    })


    this.filteredOrganisms = this.searchForm.controls.organism.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value['short_name']),
        map(organism => organism ? this.pantherSearchService.filterOrganisms(organism) : this.pantherSearchService.organisms.slice())
      )

    this.filteredContributors = this.searchForm.controls.contributor.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value['name']),
        map(contributor => contributor ? this.pantherUserService.filterContributors(contributor) : this.pantherUserService.contributors.slice())
      )

    this.filteredGroups = this.searchForm.controls.group.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value['name']),
        map(group => group ? this.pantherUserService.filterGroups(group) : this.pantherUserService.groups.slice())
      )
  }

  termDisplayFn(term): string | undefined {
    return term && term.id ? `${term.label} (${term.id})` : undefined;
  }

  evidenceDisplayFn(evidence): string | undefined {
    return evidence && evidence.id ? `${evidence.label} (${evidence.id})` : undefined;
  }

  contributorDisplayFn(contributor): string | undefined {
    return contributor ? contributor.name : undefined;
  }

  groupDisplayFn(group): string | undefined {
    return group ? group.name : undefined;
  }

  organismDisplayFn(organism): string | undefined {
    return organism ? organism.taxonName : undefined;
  }

  search() {
    const searchCriteria = this.searchForm.value;

    this.pantherSearchService.search(searchCriteria);
  }

  clear() {
    this.searchForm.controls.title.setValue('');
    this.searchForm.controls.gp.setValue('');
    this.searchForm.controls.term.setValue('');
    this.searchForm.controls.pmid.setValue('');
    this.searchForm.controls.contributor.setValue('');
    this.searchForm.controls.group.setValue('');
    this.searchForm.controls.organism.setValue('');
  }

  close() {
    this.pantherSearchMenuService.closeLeftDrawer();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
