import {
  Component,
  EventEmitter,
  Input,
  Output,
  Injectable
} from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Injectable()

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  inactiveUsersCounter: number;

  constructor(private usersService: UsersService, private counterService: CounterService) {
    this.counterService.inactiveCounterChanged.subscribe(
      (counter: number) => { this.inactiveUsersCounter = counter; }
    );
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
