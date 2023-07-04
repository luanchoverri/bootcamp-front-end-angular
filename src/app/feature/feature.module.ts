import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';



@NgModule({
  declarations: [
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskComponent,
    AddTaskComponent
  ]
})
export class FeatureModule { }
