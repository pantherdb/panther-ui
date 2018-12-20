import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { GeneListFakeDb } from './../data/gene-list';
import { GeneMapFakeDb } from './../data/gene-map';
import { GeneListFiltersFakeDb } from './../data/gene-list-filters';
import { SpeciesTreeFakeDb } from './../data/species-tree';
import { OverrepResultsFakeDb } from './../data/overrep-results'
import { VersionStatisticsFakeDb } from './../data/version-statistics'
//Browser
import { BPSlim } from './../data/browser/bp-slim'

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
            'species-list': SpeciesTreeFakeDb.data,
            'overrep-list-result': OverrepResultsFakeDb.result,
            'version-statistics': VersionStatisticsFakeDb.result,
            //Browser
            'bp-slim': BPSlim.data
        };
    }
}