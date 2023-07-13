import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Output() createTaskEvent = new EventEmitter<string>();

  emitTask(task: string){
    this.createTaskEvent.emit(task);
  }

}
