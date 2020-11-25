import { Component, OnInit } from '@angular/core';
import { PantherMenuService } from '@panther.common/services/panther-menu.service';

import { BrowserService } from './services/browser.service';

@Component({
  selector: 'panther-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {

  constructor(public pantherMenuService: PantherMenuService,
    private browserService: BrowserService) { }

  ngOnInit() {
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
