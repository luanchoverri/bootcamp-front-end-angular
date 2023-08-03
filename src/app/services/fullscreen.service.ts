import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullscreenService {

  constructor() { }


  
  toggleFullscreen(){
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  
}
