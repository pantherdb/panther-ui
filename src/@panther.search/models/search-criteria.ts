
import { each } from 'lodash';
import { CategoryPage } from './category';
import { FamilyPage } from './family';
import { GenePage } from './gene';
import { PathwayPage } from './pathway';

export class SearchCriteria {
    genePage: GenePage = new GenePage();
    familyPage: FamilyPage = new FamilyPage();
    categoryPage: CategoryPage = new CategoryPage();
    pathwayPage: PathwayPage = new PathwayPage();
    keywords: any[] = [];
    ids: any[] = [];
    gps: any[] = [];
    terms: any[] = [];
    mfs: any[] = [];
    bps: any[] = [];
    ccs: any[] = [];
    pcs: any[] = [];
    organisms: any[] = [];
    expand = true;
    filtersCount = 0;

    constructor(searchCriteria?: SearchCriteria) {
        if (searchCriteria) {
            this.genePage = searchCriteria.genePage || new GenePage();
            this.keywords = searchCriteria.keywords || [];
            this.terms = searchCriteria.terms || [];
            this.mfs = searchCriteria.mfs || [];
            this.bps = searchCriteria.bps || [];
            this.ccs = searchCriteria.ccs || [];
            this.pcs = searchCriteria.pcs || [];
            this.organisms = searchCriteria.organisms || [];
            this.ids = searchCriteria.ids || [];
            this.gps = searchCriteria.gps || [];
            this.expand = searchCriteria.expand;
        }
    }

    updateFiltersCount() {
        const self = this;

        self.filtersCount = self.keywords.length +
            self.ids.length +
            self.gps.length +
            self.organisms.length +
            self.terms.length +
            self.mfs.length +
            self.bps.length +
            self.ccs.length +
            self.pcs.length;
    }

    private query() {
        const self = this;
        const query = ['offset=' + (self.genePage.pageNumber * self.genePage.size).toString()];

        query.push('limit=' + self.genePage.size.toString());

        each(self.keywords, (keyword) => {
            query.push(`keyword=*${keyword}*`);
        });

        each(self.terms, (term) => {
            query.push(`q=${term.id}`);
        });

        each(self.mfs, (mf) => {
            query.push(`q=${mf.id}`);
        });

        each(self.bps, (bp) => {
            query.push(`q=${bp.id}`);
        });

        each(self.ccs, (cc) => {
            query.push(`q=${cc.id}`);
        });

        each(self.pcs, (pc) => {
            query.push(`q=${pc.id}`);
        });

        each(self.organisms, (organism) => {
            query.push(`q=${organism.id}`);
        });

        each(self.ids, (id) => {
            query.push(`id=${id}`);
        });

        each(self.gps, (gp) => {
            query.push(`gp=${gp.id}`);
        });

        if (self.expand) {
            query.push('expand');
        }

        return query;
    }

    build() {
        return this.query().join('&');
    }

    clearSearch() {
        this.keywords = [];
        this.terms = [];
        this.mfs = [];
        this.bps = [];
        this.ccs = [];
        this.organisms = []
        this.gps = [];

    }

}
