import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }


  public canShare(): boolean {
    return navigator.share !== undefined && navigator.canShare !== undefined;
  }

  public shareTask(task: Task){

    if (this.canShare()) {
      const taskData = {
        title: "Task shared from ToDo App:" + "\n",
        text: "Task: " + task.title + "\n" + "Completed: "+ task.isChecked + "\n" + "Description: " + task.description + "\n",
        url: window.location.href
      };

      navigator.share(taskData)
      // .then(() => console.log('Contenido compartido exitosamente'))
      // .catch(error => console.error('Error al compartir:', error));

    }else {
        alert('Web Share API not supported');
        return;
    }

    }

  
}
