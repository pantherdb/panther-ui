import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDrawer } from '@angular/material';

import { PantherTranslationLoaderService } from '@panther/services/translation-loader.service';


import { HomeMenuService } from './services/home-menu.service';
import { locale as english } from './i18n/en';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('leftDrawer')
  leftDrawer: MatDrawer;

  @ViewChild('rightDrawer')
  rightDrawer: MatDrawer;

  searchCriteria: any = {};
  searchForm: FormGroup;
  leftPanelMenu;

  constructor(private pantherTranslationLoader: PantherTranslationLoaderService,
    public homeMenuService: HomeMenuService,
    private route: ActivatedRoute,
    private router: Router) {
    this.pantherTranslationLoader.loadTranslations(english);

    this.leftPanelMenu = this.homeMenuService.leftPanelMenu;
  }

  ngOnInit() {
    this.homeMenuService.setLeftDrawer(this.leftDrawer);
    this.homeMenuService.setRightDrawer(this.rightDrawer);
  }
}
