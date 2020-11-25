import { Component, Inject, OnInit, ElementRef, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, FormControlDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

import { PantherMenuService } from '@panther.common/services/panther-menu.service';

@Component({
  selector: 'panther-sequence-search',
  templateUrl: './sequence-search.component.html',
  styleUrls: ['./sequence-search.component.scss']
})
export class SequenceSearchComponent implements OnInit {
  sequenceSearchForm: FormGroup;
  private unsubscribeAll: Subject<any>;
  constructor(public pantherMenuService: PantherMenuService) {
    this.unsubscribeAll = new Subject();
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
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
