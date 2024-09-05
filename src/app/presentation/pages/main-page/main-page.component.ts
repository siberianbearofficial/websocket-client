import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {UserService} from "../../../domain/interactors/user.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {switchMap} from "rxjs";
import {MessageService} from "../../../domain/interactors/message.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  private userService: UserService = inject(UserService);
  private messageService: MessageService = inject(MessageService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.userService.getUsers().pipe(
      switchMap(() => this.messageService.getMessages()),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

  createMessage(): void {
    this.messageService.createMessage().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }
}
