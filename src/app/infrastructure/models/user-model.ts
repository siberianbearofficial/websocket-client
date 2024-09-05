export interface UserReadModel {
  uuid: string;
  username: string;
}

export interface UserCreateModel {
  username: string;
  password: string;
}
