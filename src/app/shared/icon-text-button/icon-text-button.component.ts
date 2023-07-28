import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-text-button',
  templateUrl: './icon-text-button.component.html',
  styleUrls: ['./icon-text-button.component.scss']
})
export class IconTextButtonComponent {
  @Input() icon: String = '';
  @Input() text: String = '';

  path = "/assets/svg/"

}
