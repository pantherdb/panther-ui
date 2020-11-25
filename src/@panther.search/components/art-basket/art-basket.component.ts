import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { Cam, CamService, CamsService, PantherFormConfigService, PantherUserService } from 'panther-form-base';
import { PantherSearchService } from './../..//services/panther-search.service';
import { PantherSearchMenuService } from '../../services/search-menu.service';
import { takeUntil } from 'rxjs/operators';
import { ArtBasket, ArtBasketItem } from './../..//models/art-basket';
import { PantherReviewSearchService } from './../../services/panther-review-search.service';
import { PantherConfirmDialogService } from '@panther/components/confirm-dialog/confirm-dialog.service';
import { LeftPanel, MiddlePanel } from './../../models/menu-panels';
import { PantherSearchDialogService } from './../../services/dialog.service';

@Component({
  selector: 'panther-art-basket',
  templateUrl: './art-basket.component.html',
  styleUrls: ['./art-basket.component.scss']
})
export class ArtBasketComponent implements OnInit, OnDestroy {
  MiddlePanel = MiddlePanel;
  artBasket: ArtBasket = new ArtBasket();
  cams: Cam[] = [];
  summary;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private zone: NgZone,
    public camsService: CamsService,
    public camService: CamService,
    private confirmDialogService: PantherConfirmDialogService,
    public pantherSearchDialogService: PantherSearchDialogService,
    public pantherUserService: PantherUserService,
    public pantherReviewSearchService: PantherReviewSearchService,
    public pantherSearchMenuService: PantherSearchMenuService,
    public pantherSearchService: PantherSearchService,
    public pantherFormConfigService: PantherFormConfigService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.pantherReviewSearchService.onArtBasketChanged.pipe(
      takeUntil(this._unsubscribeAll))
      .subscribe((artBasket: ArtBasket) => {
        if (artBasket) {
          this.artBasket = artBasket;
        }
      });

    this.camsService.onCamsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(cams => {
        if (!cams) {
          return;
        }
        this.cams = cams;
      });

    this.camsService.onCamsCheckoutChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(summary => {
        if (!summary) {
          return;
        }

        this.summary = summary;
      });

  }

  selectItem(artBasketItem: ArtBasketItem) {
    this.camsService.onSelectedCamChanged.next(artBasketItem.id);
    const q = '#panther-review-cams-' + artBasketItem.displayId;
    this.pantherSearchMenuService.scrollTo(q);
  }

  resetCam(cam: Cam) {
    this.camService.loadCam(cam);
    this.camsService.reviewChanges();
  }

  remove(cam: Cam) {
    this.camsService.removeCamFromReview(cam);
    this.pantherReviewSearchService.removeFromArtBasket(cam.id);
  }

  clear() {

    const success = (cancel) => {
      if (cancel) {

        this.pantherReviewSearchService.clear();
        this.camsService.reset();
        this.pantherReviewSearchService.clearBasket();
      }
    };

    const options = {
      cancelLabel: 'No',
      confirmLabel: 'Yes'
    };

    this.confirmDialogService.openConfirmDialog('Confirm Clear Basket?',
      'You are about to remove all items from the basket. All your unsaved changes will be lost.',
      success, options);
  }

  backToReview() {
    this.pantherSearchMenuService.selectMiddlePanel(MiddlePanel.camsReview);
  }

  cancel() {
    const self = this;

    const success = (cancel) => {
      if (cancel) {
        const element = document.querySelector('#panther-review-results');

        if (element) {
          element.scrollTop = 0;
        }
        this.pantherReviewSearchService.clear();
        this.pantherReviewSearchService.onResetReview.next(true);
      }
    };

    const options = {
      cancelLabel: 'No',
      confirmLabel: 'Yes'
    };

    this.confirmDialogService.openConfirmDialog('Confirm Cancel?',
      'You are about to cancel annotation review. All your unsaved changes will be lost.',
      success, options);
  }

  resetAll() {
    const self = this;

    self.camsService.resetModels().subscribe((cams) => {
      if (cams) {
        self.camsService.loadCams();
        self.pantherReviewSearchService.onReplaceChanged.next(true);
      }
    });
    self.camsService.reviewChanges();
  }

  reviewChanges() {
    const self = this;

    self.camsService.reviewChanges();
    self.pantherSearchMenuService.selectMiddlePanel(MiddlePanel.reviewChanges);
  }

  submitChanges() {
    const self = this;

    const success = (replace) => {
      if (replace) {
        const element = document.querySelector('#panther-review-results');

        if (element) {
          element.scrollTop = 0;
        }
        self.pantherReviewSearchService.bulkEdit(true).pipe(takeUntil(this._unsubscribeAll))
          .subscribe(cams => {
            if (!cams) {
              return;
            }

            self.pantherSearchMenuService.selectMiddlePanel(MiddlePanel.cams);
            self.pantherSearchMenuService.selectLeftPanel(LeftPanel.filter);
            self.pantherReviewSearchService.clear();
            self.camsService.reset();
            self.pantherReviewSearchService.clearBasket();
            self.pantherReviewSearchService.onResetReview.next(true);
            self.zone.run(() => {
              self.confirmDialogService.openSuccessfulSaveToast('Changes successfully saved.', 'OK');
            });
          });
      }
    };



    const options = {
      cancelLabel: 'Go Back',
      confirmLabel: 'Submit'
    };

    if (self.summary) {
      const occurrences = self.summary.stats.termsCount;
      const models = self.summary.stats.camsCount;
      this.confirmDialogService.openConfirmDialog('Save Changes?',
        `Bulk edit ${occurrences} occurrences across ${models} models`,
        success, options);
    }
  }

  close() {
    this.pantherSearchMenuService.closeLeftDrawer();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
