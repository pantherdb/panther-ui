import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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

    constructor() {
        this.onCamsChanged = new BehaviorSubject({});

    }
}
