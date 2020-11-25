import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { PantherFormConfigService, PantherUserService, PantherLookupService } from 'panther-form-base';
import { PantherSearchService } from './../..//services/panther-search.service';
import { startWith, map, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { PantherSearchMenuService } from '../../services/search-menu.service';

@Component({
  selector: 'panther-search-relation',
  templateUrl: './search-relation.component.html',
  styleUrls: ['./search-relation.component.scss']
})
export class SearchRelationComponent implements OnInit, OnDestroy {
  searchCriteria: any = {};
  searchForm: FormGroup;
  selectedOrganism = {};
  searchFormData: any = [];
  cams: any[] = [];

  filteredOrganisms: Observable<any[]>;
  filteredGroups: Observable<any[]>;
  filteredContributors: Observable<any[]>;

  private _unsubscribeAll: Subject<any>;

  constructor(public pantherUserService: PantherUserService,
    public pantherSearchMenuService: PantherSearchMenuService,
    public pantherFormConfigService: PantherFormConfigService,
    private pantherSearchService: PantherSearchService) {
    this.searchForm = this.createAnswerForm();

    this._unsubscribeAll = new Subject();


    this.onValueChanges();
  }

  ngOnInit(): void { }

  createAnswerForm() {
    return new FormGroup({
      subject: new FormControl(),
      predicate: new FormControl(),
      object: new FormControl(),
    });
  }

  onValueChanges() {
    const self = this;

    this.searchForm.get('subject').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(400)
    ).subscribe(data => {

    });

    this.searchForm.get('object').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(400)
    ).subscribe(data => {

    });

    this.searchForm.get('predicate').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(400)
    ).subscribe(data => {

    });
  }

  termDisplayFn(term): string | undefined {
    return term ? term.label : undefined;
  }


  contributorDisplayFn(contributor): string | undefined {
    return contributor ? contributor.name : undefined;
  }

  search() {
    const searchCriteria = this.searchForm.value;

    this.pantherSearchService.search(searchCriteria);
  }

  clear() {
    this.searchForm.controls.subject.setValue('');
    this.searchForm.controls.predicate.setValue('');
    this.searchForm.controls.object.setValue('');
  }

  close() {
    this.pantherSearchMenuService.closeLeftDrawer();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
