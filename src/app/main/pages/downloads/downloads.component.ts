
import { Component, Inject, OnInit, ElementRef, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, FormControlDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

import { PantherMenuService } from '@panther.common/services/panther-menu.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit, OnDestroy {
  private unsubscribeAll: Subject<any>;

  constructor(public pantherMenuService: PantherMenuService) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit() {
  }


  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}


