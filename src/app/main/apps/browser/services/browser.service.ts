import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import * as _ from 'lodash';

import { Term, TermNode, TermFlatNode } from './../models/term'

@Injectable({
    providedIn: 'root',
})
export class BrowserService {
    term: Term[];
    termNodes: TermNode[];
    termDetail: any;
    activeTerm: any;
    onBpTermTreeChanged: BehaviorSubject<any>;
    onTermDetailChanged: BehaviorSubject<any>;

    constructor(private httpClient: HttpClient) {
        this.onBpTermTreeChanged = new BehaviorSubject([]);
        this.onTermDetailChanged = new BehaviorSubject({});
        //this.activeTerm = "LUCA";
    }

    getBpTermList() {
        this.httpClient.get<Term[]>('api/bp-slim')
            .subscribe((response: Term[]) => {
                this.term = response;
                this.termNodes = this._buildTermTree(this.term);
                this.onBpTermTreeChanged.next(this.termNodes);
            });
    }

    getActiveTerm() {
        return this.activeTerm;
    }

    setActiveTerm(term: any) {
        this.activeTerm = term;
    }

    private _buildTermTree(term: Term[]): TermNode[] {
        let getNestedChildren = (arr, parent_id, level) => {
            let out = []
            for (let i in arr) {
                if (arr[i].parent_id == parent_id) {
                    let children = getNestedChildren(arr, arr[i].id, level++)

                    if (children.length) {
                        arr[i].children = children
                    }
                    out.push(arr[i])
                }
            }
            return out
        }

        return getNestedChildren(term, '', 1);
    }

}
