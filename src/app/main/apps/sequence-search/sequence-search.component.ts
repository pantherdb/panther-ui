import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

import { PantherSearchMenuService } from '@panther.search/services/search-menu.service';

@Component({
  selector: 'panther-sequence-search',
  templateUrl: './sequence-search.component.html',
  styleUrls: ['./sequence-search.component.scss']
})
export class SequenceSearchComponent implements OnInit, OnDestroy {
  sequenceSearchForm: FormGroup;
  private _unsubscribeAll: Subject<any>;
  constructor(public pantherSearchMenuService: PantherSearchMenuService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.sequenceSearchForm = this.createSequenceSearchForm();
  }

  createSequenceSearchForm() {
    return new FormGroup({
      proteinSequence: new FormControl(),
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
