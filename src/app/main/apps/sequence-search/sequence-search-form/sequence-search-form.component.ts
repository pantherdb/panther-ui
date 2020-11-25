
import { Component, Inject, OnInit, ElementRef, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, FormControlDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

import { PantherMenuService } from '@panther.common/services/panther-menu.service';

@Component({
  selector: 'panther-sequence-search-form',
  templateUrl: './sequence-search-form.component.html',
  styleUrls: ['./sequence-search-form.component.scss']
})
export class SequenceSearchFormComponent implements OnInit {
  sequenceSearchForm: FormGroup;
  private _unsubscribeAll: Subject<any>;


  constructor(
    public pantherMenuService: PantherMenuService) {
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



