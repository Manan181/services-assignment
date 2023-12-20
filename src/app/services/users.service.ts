import { EventEmitter, Injectable } from '@angular/core';
import { CountService } from './count.service';

@Injectable({ providedIn: 'root' })
export class UserService {
	activeUsers: string[] = ['Max', 'Anna'];
	inActiveUsers: string[] = ['Chris', 'Manu'];
	userSetToInactive = new EventEmitter<number>();
	userSetToActive = new EventEmitter<number>();

	constructor(private countService: CountService) {}

	onSetToInactive(id: number) {
		this.userSetToInactive.emit(id);
		this.inActiveUsers.push(this.activeUsers[id]);
		this.activeUsers.splice(id, 1);
	}

	onSetToActive(id: number) {
		this.userSetToActive.emit(id);
		this.activeUsers.push(this.inActiveUsers[id]);
		this.inActiveUsers.splice(id, 1);
	}
}
