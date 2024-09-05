import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {MessageService} from "../../../../domain/interactors/message.service";
import {Observable} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-message-input',
  template: `
    <input type="text"
           [ngModel]="data$ | async"
           (ngModelChange)="setData($event)"
           (keydown.enter)="createMessage()"
    >
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageInputComponent {
  private messageService: MessageService = inject(MessageService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  setData(data: string): void {
    this.messageService.setData(data);
  }

  createMessage(): void {
    this.messageService.createMessage().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

  protected readonly data$: Observable<string> = this.messageService.data$;
}
