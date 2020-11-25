import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { pantherAnimations } from '@panther/animations';
import { takeUntil } from 'rxjs/internal/operators';
import { PantherSearchService } from '@panther.search/services/panther-search.service';

import {
  PantherFormConfigService, PantherUserService, CamService, Contributor, CamsService, Cam,
} from 'panther-form-base';

import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { CamPage } from '@panther.search/models/cam-page';
import { PantherSearchMenuService } from '@panther.search/services/search-menu.service';
import { SelectionModel } from '@angular/cdk/collections';
import { PantherCommonMenuService } from '@panther.common/services/panther-common-menu.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ReviewMode } from '@panther.search/models/review-mode';
import { PantherReviewSearchService } from '@panther.search/services/panther-review-search.service';
import { PantherUtils } from '@panther/utils/panther-utils';
import { LeftPanel, MiddlePanel, RightPanel } from '@panther.search/models/menu-panels';
import { each, find } from 'lodash';


export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'GO CAMs per page:';

  return customPaginatorIntl;
}

@Component({
  selector: 'panther-cams-table',
  templateUrl: './cams-table.component.html',
  styleUrls: ['./cams-table.component.scss'],
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
export class CamsTableComponent implements OnInit, OnDestroy {
  ReviewMode = ReviewMode;
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

  cams: any[] = [];
  camPage: CamPage;

  tableOptions = {
    reviewMode: true,
    color: 'transparent'
  }

  selection = new SelectionModel<Cam>(true, []);

  constructor(
    private camService: CamService,
    private camsService: CamsService,
    public pantherReviewSearchService: PantherReviewSearchService,
    public pantherFormConfigService: PantherFormConfigService,
    public pantherCommonMenuService: PantherCommonMenuService,
    public pantherSearchMenuService: PantherSearchMenuService,
    public pantherUserService: PantherUserService,
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

    this.pantherSearchService.onCamsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(cams => {
        if (!cams) {
          return;
        }
        this.cams = cams;
        this.preCheck();
      });

    this.camsService.onCamsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(cams => {
        if (!cams) {
          return;
        }
        this.preCheck();
      });

    this.pantherSearchService.onCamsPageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((camPage: CamPage) => {
        if (!camPage) {
          return;
        }
        this.camPage = camPage;
      });

    this.pantherReviewSearchService.onResetReview
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((reset: boolean) => {
        if (reset) {
          this.camsService.reset();
          this.selection.clear();
        }
      });

    this.pantherReviewSearchService.onReplaceChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((refresh: boolean) => {
        if (refresh) {
          this.refresh();
        }
      });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.cams.length;

    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.cams.forEach(row => this.selection.select(row));
  }

  toggleSelection(cam: Cam) {
    this.selection.toggle(cam);
    if (this.selection.isSelected(cam)) {
      this.openReview(cam);
    } else {
      this.camsService.removeCamFromReview(cam);
      this.pantherReviewSearchService.removeFromArtBasket(cam.id);
    }
  }

  preCheck() {
    const self = this;
    this.selection.clear();

    each(self.cams, (cam) => {
      const found = find(self.camsService.cams, { id: cam.id });

      if (found) {
        self.selection.select(cam);
      }
    });

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
    if (this.camPage) {
      let pageIndex = $event.pageIndex;
      if (this.pantherSearchService.searchCriteria.camPage.size > $event.pageSize) {
        pageIndex = 0;
      }
      this.pantherSearchService.getPage(pageIndex, $event.pageSize);
    }
  }

  isExpansionDetailRow(i: number, cam: Cam) {
    return cam.expanded;
  }

  toggleCamExpand(cam: Cam) {
    if (!cam.expanded) {
      this.openDetails(cam);
    } else {
      cam.expanded = false;
    }
    //  this._changeDetectorRef.markForCheck();

  }

  openReview(cam: Cam) {
    this.camsService.addCamToReview(cam.id, cam);
    this.pantherReviewSearchService.addToArtBasket(cam.id, cam.title);
  }

  openDetails(cam: Cam) {
    this.camService.loadCam(cam);
    cam.expanded = true;
    this.camService.cam = cam;
    this.camService.onCamChanged.next(cam);
    //this.openRightDrawer(RightPanel.camDetail);
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

