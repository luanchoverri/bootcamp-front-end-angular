import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Output() task = new EventEmitter<string>();

  emitTask(toDo: string){
    this.task.emit(toDo);
  }

}
