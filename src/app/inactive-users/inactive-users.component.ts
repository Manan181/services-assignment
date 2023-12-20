import { Component } from '@angular/core';
import { UserService } from '../services/users.service';

@Component({
	selector: 'app-inactive-users',
	templateUrl: './inactive-users.component.html',
	styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
	users: string[];

	constructor(public userService: UserService) {
		this.users = this.userService.inActiveUsers;
	}
}
