import { Component, OnInit } from '@angular/core';
import { PantherMenuService } from '@panther.common/services/panther-menu.service';

@Component({
  selector: 'pthr-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {

  constructor(public pantherMenuService: PantherMenuService) { }

  ngOnInit() {
  }

}
