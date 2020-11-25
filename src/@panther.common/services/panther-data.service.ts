import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PantherDataService {
  onOrganismsChanged: BehaviorSubject<any>;

  constructor(
  ) {
    this.onOrganismsChanged = new BehaviorSubject([]);

  }

  setup() {
    return true;
  }


}
