import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class StartupService {
  onDataReady: BehaviorSubject<boolean>;

  constructor(
  ) {
    const self = this;

  }

  loadData() {
    return true;
    /* return new Promise<void>((resolve, reject) => {
      console.log("AppInitService.init() called");
      ////do your initialisation stuff here  
      setTimeout(() => {
        console.log('AppInitService Finished');
        resolve();
      }, 6000);

    }); */
  }

}




