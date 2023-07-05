import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TaskComponent,
    AddTaskComponent
  ]
})
export class FeatureModule { }
