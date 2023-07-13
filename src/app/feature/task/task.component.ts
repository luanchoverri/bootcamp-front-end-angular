import { Component, EventEmitter, Input , OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent {
  @Input() task:any ; 
  @Output() checkedTask = new EventEmitter<boolean>();
  @Output() optDelete = new EventEmitter<void>();

  share = 'share';
  copy = 'copy';
  delete = 'delete';



  emitDeleteTask() {
    this.optDelete.emit();
    // Lógica para borrar la tarea
  }

  copyTask() {
    // Lógica para copiar la tarea
  }

  shareTask() {
    // Lógica para compartir la tarea
  }
  
  emitChangeOnCheckbox(){
    this.task.checked = !this.task.checked;
    this.checkedTask.emit(this.task.checked);
  }

  

}