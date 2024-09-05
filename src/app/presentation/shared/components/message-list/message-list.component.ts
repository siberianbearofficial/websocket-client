import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MessageService} from "../../../../domain/interactors/message.service";
import {Observable} from "rxjs";
import {Message} from "../../../../domain/entities/message";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent {
  private messageService: MessageService = inject(MessageService);

  protected readonly messages$: Observable<Message[]> = this.messageService.messages$;
}
