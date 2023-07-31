import { Component, Input, OnInit} from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskList: Task[] = [];

  
  constructor(private tasksService: TaskService) {}

  ngOnInit() {
    this.tasksService.tasks$.subscribe((taskList: Task[]) => {
      this.taskList = taskList;
    });
    //console.log(this.taskList);
  }
}




