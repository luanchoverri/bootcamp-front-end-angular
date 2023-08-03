import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  taskList: Task[] = [];
  taskListSuscription: Subscription = new Subscription();
 
  constructor(private tasksService: TaskService) {}

  ngOnInit() {
    this.taskListSuscription = this.tasksService.getAllTasks$().subscribe((tasks) => {
      this.taskList = tasks;
    });
    console.log(this.taskList);
  }

  



}


