import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { SharedModule } from '../shared/shared.module';
import { TaskListComponent } from './task-list/task-list.component';



@NgModule({
  declarations: [
    TaskComponent,
    AddTaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TaskComponent,
    AddTaskComponent,
    TaskListComponent
  ]
})
export class FeatureModule { }
