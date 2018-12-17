import { Component, OnInit } from '@angular/core';

import { VersionService } from './../services/version.service'

@Component({
  selector: 'pthr-version-sidebar',
  templateUrl: './version-sidebar.component.html',
  styleUrls: ['./version-sidebar.component.scss']
})
export class VersionSidebarComponent implements OnInit {

  mainMenu;

  constructor(private versionService: VersionService) {
    this.mainMenu = this.versionService.mainMenu;
  }

  ngOnInit() {
  }

}
