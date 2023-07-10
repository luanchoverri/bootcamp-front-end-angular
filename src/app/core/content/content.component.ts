import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  tasks: any[] = []; // Arreglo para almacenar las tareas

  
  
  addTask(newTask: string) { // luego el string pasa a ser un tipo tarea creando un modelo 
    if (newTask != "") {
      this.tasks.unshift({title: newTask, checked:false}); // Agregar la tarea al arreglo
    }
  }
}
