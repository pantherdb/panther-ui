import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { GeneListFakeDb } from './../data/gene-list';
import { GeneMapFakeDb } from './../data/gene-map';
import { GeneListFiltersFakeDb } from './../data/gene-list-filters';
import { SpeciesTreeFakeDb } from './../data/species-tree';

@Injectable({
    providedIn: 'root'
})
export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {
            // Gene List
            'gene-list-result': GeneListFakeDb.result,
            'gene-map-result': GeneMapFakeDb.result,
            'gene-list-filter-result': GeneListFiltersFakeDb.result,
            'species-list': SpeciesTreeFakeDb.data
        };
    }
}