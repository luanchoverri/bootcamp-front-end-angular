import { Component, Output, EventEmitter} from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Output() createTaskEvent = new EventEmitter<string>();

  accept = 'icon-checkmark';


  constructor(private taskService: TaskService) {}

  onConfirmAddTaskButton(title: string){
    this.taskService.addTask(title);

  }

}
