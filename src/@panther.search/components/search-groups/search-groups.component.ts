import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import {
  PantherFormConfigService,
  PantherUserService
} from 'panther-form-base';
import { PantherSearchService } from './../../services/panther-search.service';
import { PantherSearchMenuService } from '../../services/search-menu.service';

@Component({
  selector: 'panther-search-groups',
  templateUrl: './search-groups.component.html',
  styleUrls: ['./search-groups.component.scss'],
})

export class SearchGroupsComponent implements OnInit, OnDestroy {
  searchCriteria: any = {};
  searchForm: FormGroup;
  groupsForm: FormGroup;
  searchFormData: any = []
  // groups: any[] = [];
  // groups: any[] = [];

  private _unsubscribeAll: Subject<any>;

  constructor(public pantherUserService: PantherUserService,
    public pantherSearchMenuService: PantherSearchMenuService,
    private pantherSearchService: PantherSearchService,
    private formBuilder: FormBuilder,
    public pantherFormConfigService: PantherFormConfigService) {
    // this.groups = this.pantherSearchService.groups;

    this._unsubscribeAll = new Subject();
    this.groupsForm = this.formBuilder.group({
      groups: []
    });
  }

  ngOnInit(): void {
    //this.searchForm = this.createSearchForm();
  }

  selectGroup(group) {
    this.searchCriteria.group = group;
    this.pantherSearchService.search(this.searchCriteria);
  }


  search() {
    let searchCriteria = this.searchForm.value;

    this.pantherSearchService.search(searchCriteria);
  }

  close() {
    this.pantherSearchMenuService.closeLeftDrawer();
  }

  createSearchForm() {
    return new FormGroup({
      term: new FormControl(),
      groups: this.groupsForm,
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
