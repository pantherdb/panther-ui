import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { map, filter, reduce, catchError, retry, tap } from 'rxjs/operators';

import { PantherUtils } from '@panther/utils/panther-utils';

export interface Cam {
    model?: {};
    annotatedEntity?: {};
    relationship?: string;
    aspect?: string;
    term?: {};
    relationshipExt?: string;
    extension?: string;
    evidence?: string;
    reference?: string;
    with?: string;
    assignedBy?: string;
}

@Injectable({
    providedIn: 'root'
})
export class PantherSearchService {
    curieUtil: any;
    cams: any[] = [];
    onCamsChanged: BehaviorSubject<any>;

    constructor(private httpClient: HttpClient) {
        this.onCamsChanged = new BehaviorSubject({});

    }
}
