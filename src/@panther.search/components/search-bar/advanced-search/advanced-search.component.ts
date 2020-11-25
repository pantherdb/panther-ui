import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { advancedSearchData } from './advanced-search.tokens';
import { AdvancedSearchOverlayRef } from './advanced-search-ref';


@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})

export class PantherAdvancedSearchComponent implements OnInit, OnDestroy {
  searchCriteria: any = {};
  searchForm: FormGroup;
  searchFormData: any = [];
  cams: any[] = [];

  private unsubscribeAll: Subject<any>;

  constructor(
    public dialogRef: AdvancedSearchOverlayRef,
    @Inject(advancedSearchData) public data: any) {
    this.searchForm = this.createAnswerForm();

    this.unsubscribeAll = new Subject();

  }

  ngOnInit(): void {

  }

  cancel() {
    this.dialogRef.close();
  }

  search() {
    let searchCriteria = this.searchForm.value;

    console.dir(searchCriteria)
  }

  createAnswerForm() {
    return new FormGroup({
      gp: new FormControl(),
      ontology: new FormControl(),
      pathway: new FormControl(),
      pantherFamily: new FormControl(),
      species: new FormControl(),
    });
  }


  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
