
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
    titles: any[] = [];
    ids: any[] = [];
    gps: any[] = [];
    terms: any[] = [];
    expand = true;
    filtersCount = 0;

    constructor(searchCriteria?: SearchCriteria) {
        if (searchCriteria) {
            this.genePage = searchCriteria.genePage || new GenePage();
            this.titles = searchCriteria.titles || [];
            this.terms = searchCriteria.terms || [];
            this.ids = searchCriteria.ids || [];
            this.gps = searchCriteria.gps || [];
            this.expand = searchCriteria.expand;
        }
    }

    updateFiltersCount() {
        const self = this;

        self.filtersCount = self.titles.length +
            self.ids.length +
            self.gps.length +
            self.terms.length;
    }

    private query() {
        const self = this;
        const query = ['offset=' + (self.genePage.pageNumber * self.genePage.size).toString()];

        query.push('limit=' + self.genePage.size.toString());

        each(self.titles, (title) => {
            query.push(`title=*${title}*`);
        });

        each(self.terms, (term) => {
            query.push(`q=${term.id}`);
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
        this.titles = [];
        this.terms = [];
        this.gps = [];
    }

}
