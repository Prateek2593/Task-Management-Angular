import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy_users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // selectedUser = DUMMY_USERS[randomIndex];
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // state management and on click user event
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    // this.selectedUser = DUMMY_USERS[randomIndex];
    // setting value using signals
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
