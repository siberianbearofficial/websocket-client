import {UserReadModel} from "./user-model";
import {MessageReadModel} from "./message-model";

export interface ResponseModel {
  readonly data: any;
  readonly detail: string;
}

export interface GetUsersResponseModel extends ResponseModel {
  readonly data: UserReadModel[];
}

export interface GetUsersMeResponseModel extends ResponseModel {
  readonly data: UserReadModel;
}

export interface GetMessagesResponseModel extends ResponseModel {
  readonly data: MessageReadModel[];
}

export interface GetMessageResponseModel extends ResponseModel {
  readonly data: MessageReadModel;
}

export interface CreateMessageResponseModel extends ResponseModel {
  readonly data: string;
}
