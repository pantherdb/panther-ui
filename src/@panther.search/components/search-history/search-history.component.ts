import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { PantherSearchService } from './../..//services/panther-search.service';
import { PantherSearchMenuService } from '../../services/search-menu.service';
import { takeUntil } from 'rxjs/operators';
import { SearchHistory } from './../../models/search-history';

@Component({
  selector: 'panther-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent implements OnInit, OnDestroy {
  searchCriteria: any = {};
  searchHistory: SearchHistory[] = [];

  private _unsubscribeAll: Subject<any>;

  constructor(
    public pantherSearchMenuService: PantherSearchMenuService,
    public pantherSearchService: PantherSearchService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.pantherSearchService.onSearchHistoryChanged.pipe(
      takeUntil(this._unsubscribeAll))
      .subscribe((searchHistory: SearchHistory[]) => {
        this.searchHistory = searchHistory;
      });
  }

  selectSearch(searchHistoryItem: SearchHistory) {
    this.pantherSearchService.searchCriteria = searchHistoryItem.getSearchCriteria();
    this.pantherSearchService.updateSearch(false);
  }

  clear() {
    this.pantherSearchService.clearHistory();
  }

  close() {
    this.pantherSearchMenuService.closeLeftDrawer();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
