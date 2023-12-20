import { Component } from '@angular/core';
import { UserService } from '../services/users.service';

@Component({
	selector: 'app-active-users',
	templateUrl: './active-users.component.html',
	styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
	users: string[];

	constructor(private userService: UserService) {
		this.users = this.userService.activeUsers;
	}
}
