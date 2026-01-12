import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input() name ?: string
}
