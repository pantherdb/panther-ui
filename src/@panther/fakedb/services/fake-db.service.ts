import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { GeneListFakeDb } from './../data/gene-list';

@Injectable({
    providedIn: 'root'
})
export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {
            // Gene List
            'gene-list-result': GeneListFakeDb.result
        };
    }
}
