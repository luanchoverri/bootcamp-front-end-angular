import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FeatureModule } from '../feature/feature.module';



@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule, 
    FeatureModule,
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
  ]

})
export class CoreModule { }
