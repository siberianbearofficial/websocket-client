import {inject, Injectable} from '@angular/core';
import {UserApiService} from "../api/user-api.service";
import {map, Observable} from "rxjs";
import {GetUsersMeResponseModel, GetUsersResponseModel} from "../models/response-model";
import {User} from "../../domain/entities/user";

@Injectable({
  providedIn: 'root'
})
export class UserAdapterService {
  private userApi: UserApiService = inject(UserApiService);

  getUsers(): Observable<User[]> {
    return this.userApi.getUsers().pipe(map((response: GetUsersResponseModel): User[] => response.data));
  }

  getUsersMe(): Observable<User> {
    return this.userApi.getUsersMe().pipe(map((response: GetUsersMeResponseModel): User => response.data));
  }
}
