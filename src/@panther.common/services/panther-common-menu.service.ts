import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { MatSidenav } from '@angular/material/sidenav';
import { PantherGraphService, PantherUserService } from 'panther-form-base';



@Injectable({
  providedIn: 'root'
})
export class PantherCommonMenuService {
  private _leftSidenav: MatSidenav;

  constructor(
    private _pantherGraphService: PantherGraphService,
    private pantherUserService: PantherUserService) {

  }

  createModel(type: 'graph-editor' | 'panther-form') {
    const self = this;

    const _newModelBbopManager = this._pantherGraphService.registerManager();
    _newModelBbopManager.register('rebuild', function (resp) { }, 10);
    _newModelBbopManager.add_model().then((resp) => {
      const modelId = resp.data().id;
      let params = new HttpParams();
      params = params.append('model_id', modelId);
      params = params.append('barista_token', self.pantherUserService.baristaToken);
      const paramsString = params.toString();

      const graphEditorUrl = environment.pantherUrl + '/editor/graph/' + modelId + '?' + paramsString;
      const pantherFormUrl = environment.workbenchUrl + 'panther-form?' + paramsString;

      if (type === 'graph-editor') {
        window.open(graphEditorUrl, '_blank');
      } else if (type === 'panther-form') {
        window.open(pantherFormUrl, '_blank');
      }
    });
  }

  public setLeftSidenav(leftSidenav: MatSidenav) {
    this._leftSidenav = leftSidenav;
  }

  public openLeftSidenav() {
    return this._leftSidenav.open();
  }


}
