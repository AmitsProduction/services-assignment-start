import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  activeUsersCounter: number;

  constructor(private usersService: UsersService, private counterService: CounterService) {
    this.counterService.activeCounterChanged.subscribe(
      (counter: number) => { this.activeUsersCounter = counter; }
    );
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
