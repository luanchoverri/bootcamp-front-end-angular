import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() taskList: any[] = [];


  



  deleteTask(i:number):void {
    this.taskList.splice(i, 1);
  }

  checkedTask(i: number, value:boolean) {
    this.taskList[i].checked = value;
  }


}
