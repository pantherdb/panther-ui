import { Injectable } from '@angular/core';
import { PantherDataService } from '@panther.common/services/panther-data.service';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class StartupService {
  onDataReady: BehaviorSubject<boolean>;

  constructor(
    private dataService: PantherDataService
  ) {
    const self = this;

  }

  loadData() {
    return this.dataService.setup();
    /* return new Promise<void>((resolve, reject) => {
      console.log("AppInitService.init() called");
      setTimeout(() => {
        console.log('AppInitService Finished');
        resolve();
      }, 6000);

    }); */
  }

}




