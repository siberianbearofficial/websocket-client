import {MessageCreateModel, MessageReadModel} from "../models/message-model";
import {Message} from "../../domain/entities/message";
import {MessageCreate} from "../../domain/entities/message-create";

export const messageReadModelToEntity = (model: MessageReadModel): Message => {
  return {
    uuid: model.uuid,
    createdAt: new Date(model.created_at),
    userUuid: model.user_uuid,
    data: model.data
  };
};

export const messageCreateEntityToModel = (entity: MessageCreate): MessageCreateModel => {
  return {
    data: entity.data
  };
};
