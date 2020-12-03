import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { pantherAnimations } from './../../../../@panther/animations';
import { FormGroup } from '@angular/forms';
import { PantherSearchService } from '@panther.search/services/panther-search.service';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { GenePage } from '@panther.search/models/gene';
import { PantherSearchMenuService } from '@panther.search/services/search-menu.service';
import { PantherCommonMenuService } from '@panther.common/services/panther-common-menu.service';
import { LeftPanel, MiddlePanel, RightPanel } from '@panther.search/models/menu-panels';
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

  LeftPanel = LeftPanel;
  MiddlePanel = MiddlePanel;
  RightPanel = RightPanel;

  genePage: GenePage;

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

  genes: any[] = [];

  private _unsubscribeAll: Subject<any>;

  constructor(
    private route: ActivatedRoute,
    public pantherCommonMenuService: PantherCommonMenuService,
    public pantherSearchMenuService: PantherSearchMenuService,
    public pantherSearchService: PantherSearchService,
  ) {
    this._unsubscribeAll = new Subject();

    this.pantherSearchService.onGenesPageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((genePage: GenePage) => {
        if (!genePage) {
          return;
        }
        this.genePage = genePage;
      });
    this.pantherSearchService.setup();

  }

  ngOnInit(): void {
    this.pantherSearchMenuService.setLeftDrawer(this.leftDrawer);
    this.pantherSearchMenuService.setRightDrawer(this.rightDrawer);

  }

  ngAfterViewInit(): void {
    this.pantherSearchMenuService.resultsViewScrollbar = this._pantherPerfectScrollbarDirectives.find((directive) => {
      return directive.elementRef.nativeElement.id === 'panther-results';
    });
  }


  openLeftDrawer(panel) {
    this.pantherSearchMenuService.selectLeftPanel(panel);
    this.pantherSearchMenuService.openLeftDrawer();
  }

  selectMiddlePanel(panel) {
    this.pantherSearchMenuService.selectMiddlePanel(panel);

    switch (panel) {
      case MiddlePanel.genes:
        this.pantherSearchMenuService.selectLeftPanel(LeftPanel.filter);
        break;
    }

  }


  toggleLeftDrawer(panel) {
    this.pantherSearchMenuService.toggleLeftDrawer(panel);
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
