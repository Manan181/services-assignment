import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CountService {
	activeToInactiveCounter = 0;
	inactiveToActiveCounter = 0;

	constructor() {}

	increaseActiveToInactive() {
		this.activeToInactiveCounter++;
        console.log('Active to Inactive: ' + this.activeToInactiveCounter);
	}

	increaseInactiveToActive() {
		this.inactiveToActiveCounter++;
        console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
	}
}
