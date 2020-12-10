import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { PantherLookupService } from '@panther.search/services/panther-lookup.service';
import { PantherSearchService } from '@panther.search/services/panther-search.service';
import { PantherSearchMenuService } from '@panther.search/services/search-menu.service';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'panther-term-autocomplete',
  templateUrl: './term-autocomplete.component.html',
  styleUrls: ['./term-autocomplete.component.scss']
})
export class TermAutocompleteComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];

  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  termResults = [];

  private _unsubscribeAll: Subject<any>;

  constructor(
    public pantherSearchMenuService: PantherSearchMenuService,
    public pantherLookupService: PantherLookupService,
    public pantherSearchService: PantherSearchService) {

    this._unsubscribeAll = new Subject();
  }


  ngOnInit(): void {
    this._onValueChanges();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  termDisplayFn(term): string | undefined {
    return term && term.id ? `${term.label} (${term.id})` : undefined;
  }

  evidenceDisplayFn(evidence): string | undefined {
    return evidence && evidence.id ? `${evidence.label} (${evidence.id})` : undefined;
  }

  close() {
    this.pantherSearchMenuService.closeLeftDrawer();
  }


  add(event: MatChipInputEvent, filterType): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.pantherSearchService.searchCriteria[filterType].push(value.trim());
      this.pantherSearchService.updateSearch();
      /*  this.searchInput.forEach((item) => {
         item.nativeElement.value = null;
       });
       this.filterForm.controls[filterType].setValue(''); */
    }

    if (input) {
      input.value = '';
    }
  }

  remove(item, filterType): void {
    const index = this.pantherSearchService.searchCriteria[filterType].indexOf(item);

    if (index >= 0) {
      this.pantherSearchService.searchCriteria[filterType].splice(index, 1);
      this.pantherSearchService.updateSearch();
    }
  }

  selected(event: MatAutocompleteSelectedEvent, filterType): void {
    this.pantherSearchService.searchCriteria[filterType].push(event.option.value);
    this.pantherSearchService.updateSearch();

    /*  this.searchInput.forEach((item) => {
       item.nativeElement.value = null;
     });
 
     this.filterForm.controls[filterType].setValue(''); */
  }


  downloadFilter() {
    this.pantherSearchService.downloadSearchConfig();
  }

  private _onValueChanges() {
    const self = this;

    this.formGroup.get(this.controlName).valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(400)
    ).subscribe(data => {
      if (!data) {
        return;
      }
      self.pantherLookupService.getTerms(data).subscribe(response => {
        self.termResults = response;
      });
    });

  }

}
