import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import {
  PantherFormConfigService,
  PantherUserService
} from 'panther-form-base';
import { PantherSearchService } from './../..//services/panther-search.service';
import { PantherSearchMenuService } from '../../services/search-menu.service';

@Component({
  selector: 'panther-search-organisms',
  templateUrl: './search-organisms.component.html',
  styleUrls: ['./search-organisms.component.scss'],
})

export class SearchOrganismsComponent implements OnInit, OnDestroy {
  searchCriteria: any = {};
  searchForm: FormGroup;
  groupsForm: FormGroup;
  searchFormData: any = []
  // groups: any[] = [];
  // organisms: any[] = [];

  private _unsubscribeAll: Subject<any>;

  constructor(public pantherUserService: PantherUserService,
    public pantherSearchMenuService: PantherSearchMenuService,
    private formBuilder: FormBuilder,
    public pantherFormConfigService: PantherFormConfigService,
    public pantherSearchService: PantherSearchService) {
    // this.organisms = this.pantherSearchService.organisms;

    this._unsubscribeAll = new Subject();
    this.groupsForm = this.formBuilder.group({
      groups: []
    });
  }

  ngOnInit(): void {
  }

  selectOrganism(organism) {
    this.searchCriteria.organism = organism;
    this.pantherSearchService.search(this.searchCriteria)
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
