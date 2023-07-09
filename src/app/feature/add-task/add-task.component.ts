import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Output() taskEvent = new EventEmitter<string>();

  emitTask(task: string){
    this.taskEvent.emit(task);
  }

}
