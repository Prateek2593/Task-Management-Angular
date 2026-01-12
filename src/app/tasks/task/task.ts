import { Component, Input,inject } from '@angular/core';
import { TaskType } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required:true}) task !: TaskType;

  private taskService = inject(TasksService);

  onCompleteTask(){
    this.taskService.removeTask(this.task.id);
  }
}
