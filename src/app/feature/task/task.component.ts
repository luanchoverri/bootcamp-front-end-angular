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

  share = 'icons8-compartir-24';
  copy = 'copy' ;
  delete = 'icons8-basura-24';
  copy2 = 'copy2' ;

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