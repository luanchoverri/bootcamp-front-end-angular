import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() icon: string = "";
  @Output() buttonEvent = new EventEmitter<boolean>();

  assetUrl = "/assets/png/"
  executeAction() {
    this.buttonEvent.emit(true);
  }



}