import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-option-button',
  templateUrl: './option-button.component.html',
  styleUrls: ['./option-button.component.scss']
})
export class OptionButtonComponent {
  @Input() image: string = "";
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.clicked.emit();
  }
}