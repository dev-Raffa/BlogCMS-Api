import { IUser } from 'src/domain/user/model/user-model.domain';

export interface IResponse {
  author: IUser;
  text: string;
  likes: number;
  createdAt: Date;
  deletedAt: Date;
}
