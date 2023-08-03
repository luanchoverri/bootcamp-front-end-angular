import { Component } from '@angular/core';
import { FullscreenService } from 'src/app/services/fullscreen.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private fullscreen: FullscreenService){}

  expand = 'icon-fullscreen';

  onFullscreenButton(){
    this.fullscreen.toggleFullscreen();
  }

}