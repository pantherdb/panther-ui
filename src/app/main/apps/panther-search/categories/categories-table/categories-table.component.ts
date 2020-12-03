import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { pantherAnimations } from '@panther/animations';
import { takeUntil } from 'rxjs/internal/operators';
import { PantherSearchService } from '@panther.search/services/panther-search.service';

import { MatPaginatorIntl } from '@angular/material/paginator';
import { CategoryPage } from '@panther.search/models/category';
import { PantherSearchMenuService } from '@panther.search/services/search-menu.service';
import { SelectionModel } from '@angular/cdk/collections';
import { PantherCommonMenuService } from '@panther.common/services/panther-common-menu.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PantherUtils } from '@panther/utils/panther-utils';
import { LeftPanel, MiddlePanel, RightPanel } from '@panther.search/models/menu-panels';


export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'GO CAMs per page:';

  return customPaginatorIntl;
}

@Component({
  selector: 'panther-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss'],
  animations: [
    pantherAnimations,
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ]
})
export class CategoriesTableComponent implements OnInit, OnDestroy {
  LeftPanel = LeftPanel;
  MiddlePanel = MiddlePanel;
  RightPanel = RightPanel;

  loadingSpinner: any = {
    color: 'primary',
    mode: 'indeterminate'
  };

  private _unsubscribeAll: Subject<any>;

  displayedColumns = [
    'category_name',
    'category_symbol',
    'species',
  ];

  searchCriteria: any = {};
  searchFormData: any = [];
  searchForm: FormGroup;

  categories: any[] = [];
  categoryPage: CategoryPage;

  tableOptions = {
    reviewMode: true,
    color: 'transparent'
  }

  selection = new SelectionModel(true, []);

  constructor(
    public pantherCommonMenuService: PantherCommonMenuService,
    public pantherSearchMenuService: PantherSearchMenuService,
    public pantherSearchService: PantherSearchService) {
    this._unsubscribeAll = new Subject();

    this.selection.sort();
  }



  ngOnInit(): void {

    this.pantherSearchService.onCategoriesPageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((categoryPage: CategoryPage) => {
        if (!categoryPage) {
          return;
        }
        this.categoryPage = categoryPage;
      });

    this.pantherSearchService.onCategoriesPageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((categoryPage: CategoryPage) => {
        if (!categoryPage) {
          return;
        }
        this.categoryPage = categoryPage;
      });

  }


  search() {
    const searchCriteria = this.searchForm.value;
    this.pantherSearchService.search(searchCriteria);
  }

  /*  foo() {
       this.snpPage = snpPage;
       this.columns = snpPage.source.map((header) => (
         {
           columnDef: header,
           cell: (element: any) => `${element[header]}`
         }));
 
       this.displayedColumns = this.columns.map(c => c.columnDef);
 
   } */


  setPage($event) {
    console.log($event)
    if (this.categoryPage) {
      let pageIndex = $event.pageIndex;
      if (this.pantherSearchService.searchCriteria.categoryPage.size > $event.pageSize) {
        pageIndex = 0;
      }
      this.pantherSearchService.getPage(pageIndex, $event.pageSize);
    }
  }

  isExpansionDetailRow(category) {
    return category.expanded;
  }

  openLeftDrawer(panel) {
    this.pantherSearchMenuService.selectLeftPanel(panel);
    this.pantherSearchMenuService.openLeftDrawer();
  }

  openRightDrawer(panel) {
    this.pantherSearchMenuService.selectRightPanel(panel);
    this.pantherSearchMenuService.openRightDrawer();
  }

  refresh() {
    this.pantherSearchService.updateSearch();
  }


  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


}

