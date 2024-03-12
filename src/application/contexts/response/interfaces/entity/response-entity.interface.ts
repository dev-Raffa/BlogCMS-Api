import { IUser } from '../../../user/interfaces/entity/user-entity.interface';

export interface IResponse {
  id: number;
  author: IUser;
  text: string;
  likes: number;
  createdAt: Date;
}
