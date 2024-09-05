import {UserReadModel} from "./user-model";

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
