
import { each, cloneDeep } from 'lodash';
import { Entity } from './entity';
import { SearchCriteria } from './search-criteria';

export class SearchHistory {

    displaySections: any = [];
    searchCriteriaString: string;
    //searchCriteriaRe: SearchCriteria,

    constructor(searchCriteria: SearchCriteria) {
        //   this.searchCriteria = cloneDeep(searchCriteria)
        this.save(searchCriteria);
    }

    generateHistorySummary(searchCriteria: SearchCriteria) {
        const self = this;
        const threshold = 5;
        let count = 0;

        if (searchCriteria.ids && searchCriteria.ids.length > 0) {
            const ids = searchCriteria.ids.map((id: Entity) => {
                return id.label;
            }).join(', ');
            self._addParam('Model Id(s)', ids);
            count++;
        }

        if (searchCriteria.terms && searchCriteria.terms.length > 0) {
            const terms = searchCriteria.terms.map((term: Entity) => {
                return term.label;
            }).join(', ');
            self._addParam('Term(s)', terms);
            count++;
        }
        if (searchCriteria.gps && searchCriteria.gps.length > 0) {
            const gps = searchCriteria.gps.map((gp: Entity) => {
                return gp.label;
            }).join(', ');
            self._addParam('GP(s)', gps);
            count++;
        }

        if (count === 0) {
            self._addParam('Default Search', 'Recent Models', 'clock');
        }
    }

    save(searchCriteria: SearchCriteria) {
        this.searchCriteriaString = JSON.stringify(searchCriteria, undefined, 2);
        this.generateHistorySummary(searchCriteria)
    }

    getSearchCriteria(): SearchCriteria {
        const searchCriteria = new SearchCriteria(JSON.parse(this.searchCriteriaString));

        return searchCriteria;
    }

    private _addParam(name: string, value: string, icon?: string) {
        this.displaySections.push({
            name,
            value,
            icon,
        });
    }
}
