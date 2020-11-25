import { Component, OnDestroy, OnInit } from '@angular/core';
import { PantherSearchMenuService } from '@panther.search/services/search-menu.service';

import { BrowserService } from './services/browser.service';

@Component({
  selector: 'panther-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit, OnDestroy {

  constructor(
    public pantherSearchMenuService: PantherSearchMenuService,
    private browserService: BrowserService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  submit() {
    /*
    let query = this.annotationForm.value;
    let annotations = this.checklistSelection.selected as any[];

    query['header_id'] = annotations.reduce((annotationString, item) => {
      return annotationString + ' ' + item.id
    }, []);

    this.snpService.getSnps(query);
    */
  }

}
