import {Injectable, OnDestroy} from '@angular/core';
import {io, Socket} from 'socket.io-client';
import {Observable} from "rxjs";

const BASE_API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class SocketApiService implements OnDestroy {
  private readonly socket: Socket;

  constructor() {
    this.socket = io(BASE_API_URL, {
      transports: ['websocket', 'webtransport', 'polling']
    });
  }

  onMessageCreated(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('message_added', (data) => {
        console.info('New message. Here is it:', data);
        observer.next(data.data);
      });
    });
  }

  onUserCreated(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('user_added', (data) => {
        observer.next(data.data);
      });
    });
  }

  ngOnDestroy(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
