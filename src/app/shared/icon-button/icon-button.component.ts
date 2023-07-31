import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() icon: string = "";
  // @Output() clickedEvent = new EventEmitter<boolean>();

  path = "/assets/svg/"
  // executeAction() {
  //   this.clickedEvent.emit(true);
  // }



}