import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-option-button',
  templateUrl: './option-button.component.html',
  styleUrls: ['./option-button.component.scss']
})
export class OptionButtonComponent {
  @Input() icon: string = "";
  @Output() buttonEvent = new EventEmitter<boolean>();

  assetUrl = "/assets/png/"
  executeAction() {
    this.buttonEvent.emit(true);
  }
}