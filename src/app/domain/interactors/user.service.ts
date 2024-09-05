import {inject, Injectable} from '@angular/core';
import {UserAdapterService} from "../../infrastructure/adapters/user-adapter.service";
import {BehaviorSubject, Observable, shareReplay, take, tap} from "rxjs";
import {User} from "../entities/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userAdapter: UserAdapterService = inject(UserAdapterService);

  private user$$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.user$$.pipe(shareReplay(1));

  private users$$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$: Observable<User[]> = this.users$$.pipe(shareReplay(1));

  getUsers(): Observable<User[]> {
    return this.userAdapter.getUsers().pipe(
      tap((users: User[]) => this.users$$.next(users)),
      take(1)
    );
  }

  getUsersMe(): Observable<User> {
    return this.userAdapter.getUsersMe().pipe(
      tap((user: User) => this.user$$.next(user)),
      take(1)
    );
  }
}
