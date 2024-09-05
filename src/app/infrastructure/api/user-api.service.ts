import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {GetUsersMeResponseModel, GetUsersResponseModel} from "../models/response-model";

const BASE_API_URL: string = '/api/rest/v1';
const USERS_URL: string = 'users';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  static NETWORK_ERROR: Error = new Error('Ошибка, проверьте интернет соединение');
  static FORBIDDEN_ERROR: Error = new Error('Нет доступа');
  static SESSION_EXPIRED_ERROR: Error = new Error('Сессия устарела, необходимо войти заново');
  static UNKNOWN_ERROR: Error = new Error('Неизвестная ошибка');
  static INTERNAL_SERVER_ERROR: Error = new Error('Внутренняя ошибка сервера');

  private http: HttpClient = inject(HttpClient);

  getUsers(): Observable<GetUsersResponseModel> {
    return this.http.get<GetUsersResponseModel>(`${BASE_API_URL}/${USERS_URL}`)
      .pipe(catchError((error): Observable<never> => {
        switch (error.status) {
          case 0: {
            return throwError(UserApiService.NETWORK_ERROR);
          }
          case 401: {
            return throwError(UserApiService.SESSION_EXPIRED_ERROR);
          }
          case 403: {
            return throwError(UserApiService.FORBIDDEN_ERROR);
          }
          case 500: {
            return throwError(UserApiService.INTERNAL_SERVER_ERROR);
          }
          default: {
            console.error('STATUS', error.status);
            return throwError(UserApiService.UNKNOWN_ERROR)
          }
        }
      }));
  }

  getUsersMe(): Observable<GetUsersMeResponseModel> {
    return this.http.get<GetUsersMeResponseModel>(`${BASE_API_URL}/${USERS_URL}/me`)
      .pipe(catchError((error): Observable<never> => {
        switch (error.status) {
          case 0: {
            return throwError(UserApiService.NETWORK_ERROR);
          }
          case 401: {
            return throwError(UserApiService.SESSION_EXPIRED_ERROR);
          }
          case 403: {
            return throwError(UserApiService.FORBIDDEN_ERROR);
          }
          case 500: {
            return throwError(UserApiService.INTERNAL_SERVER_ERROR);
          }
          default: {
            console.error('STATUS', error.status);
            return throwError(UserApiService.UNKNOWN_ERROR)
          }
        }
      }));
  }
}
