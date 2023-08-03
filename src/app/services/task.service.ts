import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject!: BehaviorSubject<Task[]> ;
  private idCounter!: number;
  
  constructor(private localStorage: LocalStorageService) {

    this.tasks = this._getStoredTasks();
    this.tasksSubject = new BehaviorSubject<Task[]>(this.tasks);
    this.idCounter = this._getStoredIdCounter();
  
  }

  

  public addTask(title: string): void {
    if (title != ""){
      //const id = this.tasks.length; -> implica actualizar el resto de la lsita cuando borras alguna
      this.tasks.unshift(new Task(this.idCounter++, title, ""));
      this.tasksSubject.next(this.tasks); // Emite la nueva lista de tareas a los suscriptores
      this._storeTasks();
      this._storeIdCounter();
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
      this._storeTasks();
    }
  }


  public deleteTask(id: number): void {

    this.tasks = this.tasks.filter((task) => task.id !== id);
    console.log(this.tasks);
    this.tasksSubject.next(this.tasks);
    this._storeTasks();

    
  }

  public getAllTasks$(): Observable<Task[]> {
    return this.tasksSubject.asObservable();

  }



  public getTaskById(id: number): Task | null {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (taskFound !== undefined) {
      return taskFound;
    }
    return null;
  }

  private _storeTasks() { 
    
    this.localStorage.setItem('tasks', JSON.stringify(this.tasks));
    console.log(JSON.stringify(this.tasks));

  }

  private _storeIdCounter() {
    this.localStorage.setItem('idCounter', this.idCounter.toString());
  }

  private _getStoredIdCounter(): number {
    const storedIdCounter = this.localStorage.getItem('idCounter');
    return storedIdCounter !== null ? parseInt(storedIdCounter, 10) : 0;
  }

  private _getStoredTasks():  Task[] {
    let storedTasks  = this.localStorage.getItem('tasks');
    if (storedTasks !== null) {
      console.log("nos traemos las tareas");
      const parsedTasks=  JSON.parse(storedTasks);

      if (Array.isArray(parsedTasks)) {
        return parsedTasks.map(task => new Task(task._id, task._title, task._description));
      } else {
        console.error("Los datos almacenados no son un arreglo válido.");
        return [];
      }
    } else {
      return [];
    }
  }








}