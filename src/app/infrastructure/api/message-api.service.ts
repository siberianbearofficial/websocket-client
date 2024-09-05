import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {CreateMessageResponseModel, GetMessageResponseModel, GetMessagesResponseModel} from "../models/response-model";
import {MessageCreateModel} from "../models/message-model";

const BASE_API_URL: string = '/api/rest/v1';
const MESSAGES_URL: string = 'messages';

@Injectable({
  providedIn: 'root'
})
export class MessageApiService {
  private http: HttpClient = inject(HttpClient);

  static NETWORK_ERROR: Error = new Error('Ошибка, проверьте интернет соединение');
  static FORBIDDEN_ERROR: Error = new Error('Нет доступа');
  static SESSION_EXPIRED_ERROR: Error = new Error('Сессия устарела, необходимо войти заново');
  static UNKNOWN_ERROR: Error = new Error('Неизвестная ошибка');
  static INTERNAL_SERVER_ERROR: Error = new Error('Внутренняя ошибка сервера');

  getMessages(): Observable<GetMessagesResponseModel> {
    return this.http.get<GetMessagesResponseModel>(`${BASE_API_URL}/${MESSAGES_URL}`)
      .pipe(catchError((error): Observable<never> => {
        switch (error.status) {
          case 0: {
            return throwError(MessageApiService.NETWORK_ERROR);
          }
          case 401: {
            return throwError(MessageApiService.SESSION_EXPIRED_ERROR);
          }
          case 403: {
            return throwError(MessageApiService.FORBIDDEN_ERROR);
          }
          case 500: {
            return throwError(MessageApiService.INTERNAL_SERVER_ERROR);
          }
          default: {
            console.error('STATUS', error.status);
            return throwError(MessageApiService.UNKNOWN_ERROR)
          }
        }
      }));
  }

  getMessage(uuid: string): Observable<GetMessageResponseModel> {
    return this.http.get<GetMessageResponseModel>(`${BASE_API_URL}/${MESSAGES_URL}/${uuid}`)
      .pipe(catchError((error): Observable<never> => {
        switch (error.status) {
          case 0: {
            return throwError(MessageApiService.NETWORK_ERROR);
          }
          case 401: {
            return throwError(MessageApiService.SESSION_EXPIRED_ERROR);
          }
          case 403: {
            return throwError(MessageApiService.FORBIDDEN_ERROR);
          }
          case 500: {
            return throwError(MessageApiService.INTERNAL_SERVER_ERROR);
          }
          default: {
            console.error('STATUS', error.status);
            return throwError(MessageApiService.UNKNOWN_ERROR)
          }
        }
      }));
  }

  createMessage(model: MessageCreateModel): Observable<CreateMessageResponseModel> {
    return this.http.post<CreateMessageResponseModel>(`${BASE_API_URL}/${MESSAGES_URL}`, model)
      .pipe(catchError((error): Observable<never> => {
        switch (error.status) {
          case 0: {
            return throwError(MessageApiService.NETWORK_ERROR);
          }
          case 401: {
            return throwError(MessageApiService.SESSION_EXPIRED_ERROR);
          }
          case 403: {
            return throwError(MessageApiService.FORBIDDEN_ERROR);
          }
          case 500: {
            return throwError(MessageApiService.INTERNAL_SERVER_ERROR);
          }
          default: {
            console.error('STATUS', error.status);
            return throwError(MessageApiService.UNKNOWN_ERROR)
          }
        }
      }));
  }
}
