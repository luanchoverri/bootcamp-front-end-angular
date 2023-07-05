import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './Tasks.component.html',
  styleUrls: ['./Tasks.component.scss']
})
export class TasksComponent {
  @Input() list:any[]=[];
}
