import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { ClipboardService } from 'src/app/services/clipboard.service';
import { ShareService } from 'src/app/services/share.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(
    private taskService: TaskService,
    private shareService: ShareService,
    private copyService: ClipboardService
  ) {}

  share = 'icon-share';
  copy = 'icon-paste';
  delete = 'icon-bin';

  onDeleteTaskButton() {
    this.taskService.deleteTask(this.task.id);
    // Lógica para borrar la tarea
  }

  onCopyTaskButton() {
   this.copyService.copyTask(this.task);
  }

  onShareTaskButton() {
    this.shareService.shareTask(this.task);
    // Lógica para borrar la tarea
  }

  // emitChangeOnCheckbox(){
  //   this.task.checked = !this.task.checked;
  //   this.checkedTask.emit(this.task.checked);
  // }
}
