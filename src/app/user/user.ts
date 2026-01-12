import { Component, EventEmitter, Input, Output} from '@angular/core';

import { DUMMY_USERS } from '../dummy_users';
import { UserType } from './user.model';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // @Input({required:true}) id! : string;
  // @Input({required:true}) avatar! : string;
  // @Input({required:true}) name! : string;
  @Input({required:true}) user !: UserType;
  @Input({required:true}) selected !: boolean;
  @Output() select = new EventEmitter();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
