import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class PantherCommonMenuService {
  private _leftSidenav: MatSidenav;

  constructor() {

  }

  public setLeftSidenav(leftSidenav: MatSidenav) {
    this._leftSidenav = leftSidenav;
  }

  public openLeftSidenav() {
    return this._leftSidenav.open();
  }

}
