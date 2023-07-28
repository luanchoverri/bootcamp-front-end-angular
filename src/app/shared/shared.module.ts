import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconTextButtonComponent } from './icon-text-button/icon-text-button.component';
import { TextButtonComponent } from './text-button/text-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';




@NgModule({
  declarations: [
     IconTextButtonComponent,
     TextButtonComponent,
     IconButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconTextButtonComponent,
    TextButtonComponent,
    IconButtonComponent

  ],
})
export class SharedModule { }
