import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { pantherAnimations } from '@panther/animations';
import { takeUntil } from 'rxjs/internal/operators';
import { PantherSearchService } from '@panther.search/services/panther-search.service';

import { MatPaginatorIntl } from '@angular/material/paginator';
import { GenePage } from '@panther.search/models/gene-page';
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
  selector: 'panther-genes-table',
  templateUrl: './genes-table.component.html',
  styleUrls: ['./genes-table.component.scss'],
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
export class GenesTableComponent implements OnInit, OnDestroy {
  LeftPanel = LeftPanel;
  MiddlePanel = MiddlePanel;
  RightPanel = RightPanel;

  loadingSpinner: any = {
    color: 'primary',
    mode: 'indeterminate'
  };

  private _unsubscribeAll: Subject<any>;
  private _isReviewMode: string;

  @Input() set isReviewMode(value: any) {
    this._isReviewMode = value;
    this.initTable(this._isReviewMode);
  }

  get isReviewMode(): any {
    return this._isReviewMode;
  }

  displayedColumns = [];

  searchCriteria: any = {};
  searchFormData: any = [];
  searchForm: FormGroup;

  genes: any[] = [];
  genePage: GenePage;

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

  initTable(isReviewMode) {
    this.displayedColumns = [
      'expand',
      'title',
      'state',
      'date',
      'contributor',
      'edit',
      'export',
    ];

    if (isReviewMode) {
      this.displayedColumns.unshift('select');
    }
  }

  ngOnInit(): void {

    this.pantherSearchService.onGenesChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(genes => {
        if (!genes) {
          return;
        }
        this.genes = genes;
      });


    this.pantherSearchService.onGenesPageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((genePage: GenePage) => {
        if (!genePage) {
          return;
        }
        this.genePage = genePage;
      });

  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.genes.length;

    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.genes.forEach(row => this.selection.select(row));
  }


  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  toggleLeftDrawer(panel) {
    this.pantherSearchMenuService.toggleLeftDrawer(panel);
  }

  search() {
    const searchCriteria = this.searchForm.value;
    this.pantherSearchService.search(searchCriteria);
  }

  getStateClass(stateLabel) {
    return {
      'panther-development': stateLabel === 'development',
      'panther-production': stateLabel === 'production',
      'panther-review': stateLabel === 'review'
    };
  }

  setPage($event) {
    console.log($event)
    if (this.genePage) {
      let pageIndex = $event.pageIndex;
      if (this.pantherSearchService.searchCriteria.genePage.size > $event.pageSize) {
        pageIndex = 0;
      }
      this.pantherSearchService.getPage(pageIndex, $event.pageSize);
    }
  }

  isExpansionDetailRow(gene) {
    return gene.expanded;
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

  reset() {
    this.pantherSearchService.clearSearchCriteria();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  cleanId(dirtyId: string) {
    return PantherUtils.cleanID(dirtyId);
  }

}

