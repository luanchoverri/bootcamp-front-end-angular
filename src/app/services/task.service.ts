import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject  = new BehaviorSubject<Task[]>(this.tasks);
  private idCounter = 0;
  
  constructor() {}

  tasks$ = this.tasksSubject.asObservable();

  public addTask(title: string): void {
    if (title != ""){
      //const id = this.tasks.length; -> implica actualizar el resto de la lsita cuando borras alguna
      this.tasks.unshift(new Task(this.idCounter++, title, ""));
      this.tasksSubject.next(this.tasks); // Emitir la nueva lista de tareas a los suscriptores
    }
      
    console.log(this.tasks);

  }

  public isTaskIdExist(id:number){
    return this.tasks.some((task) => task.id === id);
  }

  public checkTask(id:number): void{
    const taskFound = this.getTaskById(id);
    if(taskFound){
      taskFound.setChecked(!taskFound.isChecked);
    }
  }


  public deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.tasksSubject.next(this.tasks);
    console.log("delete", this.tasks);
    
  }

  public getAllTasks(): Task[] {
    return this.tasks
  }



  public getTaskById(id: number): Task | null {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (taskFound !== undefined) {
      return taskFound;
    }
    return null;
  }


}