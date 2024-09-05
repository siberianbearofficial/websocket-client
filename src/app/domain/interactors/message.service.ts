import {inject, Injectable} from '@angular/core';
import {MessageAdapterService} from "../../infrastructure/adapters/message-adapter.service";
import {BehaviorSubject, Observable, shareReplay, take, tap} from "rxjs";
import {Message} from "../entities/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageAdapter: MessageAdapterService = inject(MessageAdapterService);

  private messages$$: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  messages$: Observable<Message[]> = this.messages$$.pipe(shareReplay(1));

  private data$$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  data$: Observable<string> = this.data$$.pipe(shareReplay(1));

  getMessages(): Observable<Message[]> {
    return this.messageAdapter.getMessages().pipe(
      tap((messages: Message[]) => this.messages$$.next(messages)),
      take(1)
    );
  }

  getMessage(uuid: string): Observable<Message> {
    return this.messageAdapter.getMessage(uuid).pipe(take(1));
  }

  createMessage(): Observable<string> {
    return this.messageAdapter.createMessage({data: this.data$$.value}).pipe(
      tap(() => this.setData('')),
      take(1)
    );
  }

  setData(data: string): void {
    this.data$$.next(data);
  }
}
