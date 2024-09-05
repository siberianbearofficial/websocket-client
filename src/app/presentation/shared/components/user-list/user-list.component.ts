import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {UserService} from "../../../../domain/interactors/user.service";
import {Observable} from "rxjs";
import {User} from "../../../../domain/entities/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  private userService: UserService = inject(UserService);

  protected readonly users$: Observable<User[]> = this.userService.users$;
}
