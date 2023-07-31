import { Component, EventEmitter, Input , OnChanges, Output, SimpleChanges} from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent {
  @Input() task!:Task; 

  constructor(private taskService: TaskService){}

 

  share = 'icon-share';
  copy = 'icon-paste' ;
  delete = 'icon-bin';


  onDeleteTaskButton() {
    this.taskService.deleteTask(this.task.id);
    // Lógica para borrar la tarea
  }

  // copyTask() {
  //   // Lógica para copiar la tarea
  // }

  // shareTask() {
  //   // Lógica para compartir la tarea
  // }
  
  // emitChangeOnCheckbox(){
  //   this.task.checked = !this.task.checked;
  //   this.checkedTask.emit(this.task.checked);
  // }

  

}