export interface MessageReadModel {
  uuid: string;
  created_at: string;
  user_uuid: string;
  data: string;
}

export interface MessageCreateModel {
  data: string;
}
