import { Component, Inject, OnInit, ElementRef, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, FormControlDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'pthr-sequence-search',
  templateUrl: './sequence-search.component.html',
  styleUrls: ['./sequence-search.component.scss']
})
export class SequenceSearchComponent implements OnInit {
  sequenceSearchForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.sequenceSearchForm = this.createSequenceSearchForm();
  }

  createSequenceSearchForm() {
    return new FormGroup({
      proteinSequence: new FormControl(),
    });
  }

}
