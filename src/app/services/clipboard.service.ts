import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor(private notify: ToastrService) { }


  public copyTask(task: Task){
   
      navigator.clipboard.writeText(task.title)
      .then(() => {
        const message = '"' + task.title + '" copied to clipboard';
        this.notify.success(message, 'Copied', { timeOut: 1400 });
      })
      .catch(err => {
        const message = 'Failed to copy task to clipboard';
        this.notify.error(message, 'Error');
      });
  }
  




    
}
