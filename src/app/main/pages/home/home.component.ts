import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PantherTranslationLoaderService } from '@panther/services/translation-loader.service';

import { locale as english } from './i18n/en';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchCriteria: any = {};
  searchForm: FormGroup;

  constructor(private pantherTranslationLoader: PantherTranslationLoaderService,
    private route: ActivatedRoute,
    private router: Router) {
    this.pantherTranslationLoader.loadTranslations(english);
    this.searchForm = this.createAnswerForm();
  }

  ngOnInit() {

  }

  createAnswerForm() {
    return new FormGroup({
      goTerm: new FormControl(this.searchCriteria.goTerm),
      geneProduct: new FormControl(this.searchCriteria.geneProduct),
      pmid: new FormControl(this.searchCriteria.pmid),
    });
  }
}
