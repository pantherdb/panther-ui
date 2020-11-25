import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { PantherPerfectScrollbarDirective } from '@panther/directives/panther-perfect-scrollbar/panther-perfect-scrollbar.directive';
import { LeftPanel, MiddlePanel, RightPanel } from './../models/menu-panels';
const pantherTypes = require('@panther/data/config/panther-types.json');

@Injectable({
    providedIn: 'root'
})
export class PantherSearchMenuService {
    selectedLeftPanel: LeftPanel;
    selectedMiddlePanel: MiddlePanel;
    selectedRightPanel: RightPanel;
    resultsViewScrollbar: PantherPerfectScrollbarDirective;

    private leftDrawer: MatDrawer;
    private rightDrawer: MatDrawer;

    _mainMenu = [
        pantherTypes.page.home,
        pantherTypes.page.geneListAnalysis,
        pantherTypes.page.browser,
        pantherTypes.page.sequenceSearch,
        pantherTypes.page.cSNPScoring,
    ]

    _subMenu = [
        pantherTypes.page.version,
        pantherTypes.page.downloads,
        pantherTypes.page.help,
    ]


    constructor() {
        this.selectedLeftPanel = LeftPanel.filter;
        this.selectedMiddlePanel = MiddlePanel.genes;
        this.selectedLeftPanel = this._mainMenu[0];
    }


    get mainMenu() {
        return this._mainMenu;
    }

    get subMenu() {
        return this._subMenu;
    }

    get pantherTypes() {
        return pantherTypes;
    }



    selectLeftPanel(panel: LeftPanel) {
        this.selectedLeftPanel = panel;
    }

    selectMiddlePanel(panel: MiddlePanel) {
        this.selectedMiddlePanel = panel;

    }

    selectRightPanel(panel: RightPanel) {
        this.selectedRightPanel = panel;
    }

    public setLeftDrawer(leftDrawer: MatDrawer) {
        this.leftDrawer = leftDrawer;
    }

    public openLeftDrawer() {
        return this.leftDrawer.open();
    }

    public closeLeftDrawer() {
        return this.leftDrawer.close();
    }

    public toggleLeftDrawer(panel: LeftPanel) {
        if (this.selectedLeftPanel === panel) {
            this.leftDrawer.toggle();
        } else {
            this.selectLeftPanel(panel);
            return this.openLeftDrawer();
        }
    }

    public setRightDrawer(rightDrawer: MatDrawer) {
        this.rightDrawer = rightDrawer;
    }

    public openRightDrawer() {
        return this.rightDrawer.open();
    }

    public closeRightDrawer() {
        return this.rightDrawer.close();
    }

    resetResults() {
        const element = document.querySelector('#panther-results');

        if (element) {
            // element.scrollTop = 0;
        }

        setTimeout(() => {
            if (this.resultsViewScrollbar) {
                this.resultsViewScrollbar.update();

                setTimeout(() => {
                    this.resultsViewScrollbar.scrollToTop(0);
                });
            }
        });
    }

    scrollTo(q: string) {

        setTimeout(() => {
            if (this.resultsViewScrollbar) {
                this.resultsViewScrollbar.update();

                setTimeout(() => {
                    this.resultsViewScrollbar.scrollToElement(q, -140, 1000);
                });
            }
        });
    }

}
