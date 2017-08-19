import { EventEmitter } from '@angular/core';

export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  activeCounterChanged = new EventEmitter<number>();
  inactiveCounterChanged = new EventEmitter<number>();

  updateInactiveCounter() {
    this.activeToInactiveCounter++;
    this.inactiveCounterChanged.emit(this.activeToInactiveCounter);
  }

  updateActiveCounter() {
    this.inactiveToActiveCounter++;
    this.activeCounterChanged.emit(this.inactiveToActiveCounter);
  }
}
