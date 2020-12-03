import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PantherLookupService {
    searchApi = environment.pantherSearchApi;

    constructor(private httpClient: HttpClient) {

    }

    private _handleError(error: any) {
        console.log(error);
        return throwError(error);
    }

    getTerms(q: string): Observable<any> {
        let params = new HttpParams();

        params = params.append('q', q.toString());

        return this.httpClient.get(`${this.searchApi}/terms`, { params: params }).pipe(
            map(res => res['results']),
            catchError(this._handleError)
        );
    }

}
