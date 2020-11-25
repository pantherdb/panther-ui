import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { pantherAnimations } from './../../../../@panther/animations';
import {
  Cam,
  Contributor,
  PantherUserService,
  PantherFormConfigService,
  CamService,
  CamsService
} from 'panther-form-base';

import { FormGroup } from '@angular/forms';
import { PantherSearchService } from '@panther.search/services/panther-search.service';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { CamPage } from '@panther.search/models/cam-page';
import { PantherSearchMenuService } from '@panther.search/services/search-menu.service';
import { PantherCommonMenuService } from '@panther.common/services/panther-common-menu.service';
import { ReviewMode } from '@panther.search/models/review-mode';
import { LeftPanel, MiddlePanel, RightPanel } from '@panther.search/models/menu-panels';
import { ArtBasket } from '@panther.search/models/art-basket';
import { PantherReviewSearchService } from '@panther.search/services/panther-review-search.service';
import { PantherPerfectScrollbarDirective } from '@panther/directives/panther-perfect-scrollbar/panther-perfect-scrollbar.directive';

@Component({
  selector: 'panther-panther-search',
  templateUrl: './panther-search.component.html',
  styleUrls: ['./panther-search.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  animations: pantherAnimations
})
export class PantherSearchComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('leftDrawer', { static: true })
  leftDrawer: MatDrawer;

  @ViewChild('rightDrawer', { static: true })
  rightDrawer: MatDrawer;

  @ViewChildren(PantherPerfectScrollbarDirective)
  private _pantherPerfectScrollbarDirectives: QueryList<PantherPerfectScrollbarDirective>;

  ReviewMode = ReviewMode;
  LeftPanel = LeftPanel;
  MiddlePanel = MiddlePanel;
  RightPanel = RightPanel;
  artBasket: ArtBasket = new ArtBasket();

  camPage: CamPage;
  public cam: Cam;
  public user: Contributor;

  searchResults = [];
  modelId = '';
  searchCriteria: any = {};
  searchFormData: any = [];
  searchForm: FormGroup;
  loadingSpinner: any = {
    color: 'primary',
    mode: 'indeterminate'
  };
  summary: any = {
    expanded: false,
    detail: {}
  };

  isReviewMode = false;

  cams: any[] = [];

  private _unsubscribeAll: Subject<any>;

  constructor(
    private route: ActivatedRoute,
    private camService: CamService,
    private camsService: CamsService,
    public pantherReviewSearchService: PantherReviewSearchService,
    public pantherFormConfigService: PantherFormConfigService,
    public pantherCommonMenuService: PantherCommonMenuService,
    public pantherSearchMenuService: PantherSearchMenuService,
    public pantherUserService: PantherUserService,
    public pantherSearchService: PantherSearchService,
  ) {
    this._unsubscribeAll = new Subject();

    this.route
      .queryParams
      .subscribe(params => {
        const baristaToken = params['barista_token'] || null;
        this.pantherUserService.getUser(baristaToken);
      });

    this.pantherSearchService.onCamsPageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((camPage: CamPage) => {
        if (!camPage) {
          return;
        }
        this.camPage = camPage;
      });

    this.pantherUserService.onUserChanged.pipe(
      distinctUntilChanged(this.pantherUserService.distinctUser),
      takeUntil(this._unsubscribeAll))
      .subscribe((user: Contributor) => {
        if (user === undefined) {
          return;
        }
        this.pantherFormConfigService.setupUrls();
        this.pantherFormConfigService.setUniversalUrls();
        this.pantherSearchService.setup();
        this.pantherReviewSearchService.setup();
        this.camsService.setup();
      });
  }

  ngOnInit(): void {
    this.pantherSearchMenuService.setLeftDrawer(this.leftDrawer);
    this.pantherSearchMenuService.setRightDrawer(this.rightDrawer);

    this.rightDrawer.open();

    this.pantherSearchService.onCamsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(cams => {
        this.cams = cams;
      });

    this.pantherReviewSearchService.onArtBasketChanged.pipe(
      takeUntil(this._unsubscribeAll))
      .subscribe((artBasket: ArtBasket) => {
        if (artBasket) {
          this.artBasket = artBasket;
        }
      });
  }

  ngAfterViewInit(): void {
    this.pantherSearchMenuService.resultsViewScrollbar = this._pantherPerfectScrollbarDirectives.find((directive) => {
      return directive.elementRef.nativeElement.id === 'panther-results';
    });
  }

  loadCam(modelId) {
    const self = this;

    this.cam = this.camService.getCam(modelId);
  }

  edit() {
    // this.loadModel(this.selectCam)
    // this.openRightDrawer(RightPanel.camForm);
  }

  openLeftDrawer(panel) {
    this.pantherSearchMenuService.selectLeftPanel(panel);
    this.pantherSearchMenuService.openLeftDrawer();
  }

  selectMiddlePanel(panel) {
    this.pantherSearchMenuService.selectMiddlePanel(panel);

    switch (panel) {
      case MiddlePanel.cams:
        this.pantherSearchMenuService.selectLeftPanel(LeftPanel.filter);
        break;
      case MiddlePanel.camsReview:
        this.pantherSearchMenuService.selectLeftPanel(LeftPanel.artBasket);
        break;
      case MiddlePanel.reviewChanges:
        this.pantherSearchMenuService.selectLeftPanel(LeftPanel.artBasket);
        break;
    }

  }

  reviewChanges() {
    const self = this;

    self.camsService.reviewChanges();
    self.pantherSearchMenuService.selectMiddlePanel(MiddlePanel.reviewChanges);
  }

  openRightDrawer(panel) {
    this.pantherSearchMenuService.selectRightPanel(panel);
    this.pantherSearchMenuService.openRightDrawer();
  }

  toggleLeftDrawer(panel) {
    this.pantherSearchMenuService.toggleLeftDrawer(panel);
  }

  createModel(type: 'graph-editor' | 'panther-form') {
    this.pantherCommonMenuService.createModel(type);
  }

  openBasketPanel() {
    this.openLeftDrawer(LeftPanel.artBasket);
    this.pantherSearchMenuService.selectMiddlePanel(MiddlePanel.camsReview);
    this.pantherSearchMenuService.reviewMode = ReviewMode.on;
    this.isReviewMode = true;
  }

  toggleReviewMode() {
    if (this.pantherSearchMenuService.reviewMode === ReviewMode.off) {
      this.pantherSearchMenuService.reviewMode = ReviewMode.on;
      this.isReviewMode = true;
      // this.pantherSearchMenuService.closeLeftDrawer();
    } else if (this.pantherSearchMenuService.reviewMode === ReviewMode.on) {
      this.pantherSearchMenuService.reviewMode = ReviewMode.off;
      this.pantherSearchMenuService.selectMiddlePanel(MiddlePanel.cams);
      this.pantherSearchMenuService.selectLeftPanel(LeftPanel.filter);
      this.isReviewMode = false;
    }
  }

  search() {
    const searchCriteria = this.searchForm.value;
    this.pantherSearchService.search(searchCriteria);
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
}
