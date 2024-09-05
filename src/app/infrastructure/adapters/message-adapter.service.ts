import {inject, Injectable} from '@angular/core';
import {MessageApiService} from "../api/message-api.service";
import {map, Observable} from "rxjs";
import {Message} from "../../domain/entities/message";
import {CreateMessageResponseModel, GetMessageResponseModel, GetMessagesResponseModel} from "../models/response-model";
import {messageCreateEntityToModel, messageReadModelToEntity} from "../helpers/message-helper";
import {MessageCreate} from "../../domain/entities/message-create";
import {MessageCreateModel} from "../models/message-model";

@Injectable({
  providedIn: 'root'
})
export class MessageAdapterService {
  private messageApi: MessageApiService = inject(MessageApiService);

  getMessages(): Observable<Message[]> {
    return this.messageApi.getMessages().pipe(
      map((response: GetMessagesResponseModel) => response.data.map(messageReadModelToEntity))
    );
  }

  getMessage(uuid: string): Observable<Message> {
    return this.messageApi.getMessage(uuid).pipe(
      map((response: GetMessageResponseModel) => messageReadModelToEntity(response.data))
    );
  }

  createMessage(messageCreate: MessageCreate): Observable<string> {
    const model: MessageCreateModel = messageCreateEntityToModel(messageCreate);

    return this.messageApi.createMessage(model).pipe(
      map((response: CreateMessageResponseModel) => response.data)
    );
  }
}
