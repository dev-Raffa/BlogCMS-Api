import { IUser } from '../../user/interfaces/entity/user-entity.interface';
import { IResponse } from '../interfaces/entity/response-entity.interface';

export class ResponseEntity implements IResponse {
  id: number;
  author: IUser;
  text: string;
  likes: number;
  createdAt: Date;
}
