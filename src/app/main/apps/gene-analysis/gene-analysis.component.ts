
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDrawer } from '@angular/material';

import { PantherTranslationLoaderService } from '@panther/services/translation-loader.service';

import { PantherMenuService } from '@panther.common/services/panther-menu.service';

@Component({
  selector: 'pthr-gene-analysis',
  templateUrl: './gene-analysis.component.html',
  styleUrls: ['./gene-analysis.component.scss']
})
export class GeneAnalysisComponent implements OnInit {

  @ViewChild('leftDrawer')
  leftDrawer: MatDrawer;

  @ViewChild('rightDrawer')
  rightDrawer: MatDrawer;

  searchCriteria: any = {};
  searchForm: FormGroup;
  leftPanelMenu;

  constructor(private pantherTranslationLoader: PantherTranslationLoaderService,
    public pantherMenuService: PantherMenuService,
    private route: ActivatedRoute,
    private router: Router) {

    this.leftPanelMenu = this.pantherMenuService.leftPanelMenu;
  }

  ngOnInit() {
    this.pantherMenuService.setLeftDrawer(this.leftDrawer);
    this.pantherMenuService.setRightDrawer(this.rightDrawer);
  }
}
