import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { SharedModule } from '../shared/shared.module';
import { TasksComponent } from './tasks/tasks.component';



@NgModule({
  declarations: [
    TaskComponent,
    AddTaskComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TaskComponent,
    AddTaskComponent,
    TasksComponent
  ]
})
export class FeatureModule { }
