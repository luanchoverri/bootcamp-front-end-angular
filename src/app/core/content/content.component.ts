import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  tasks: any[] = []; // Arreglo para almacenar las tareas

  addTask(newTask: string) {
    if (newTask != "") {
      this.tasks.unshift(newTask); // Agregar la tarea al arreglo
    }
  }
}
