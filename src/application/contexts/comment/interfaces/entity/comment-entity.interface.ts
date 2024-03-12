import { IResponse } from '../../../response/interfaces/entity/response-entity.interface';
import { ISubscriber } from '../../../subscriber/interfaces/entity/subscriber-entity.interface';

export interface IComment {
  id: number;
  author: ISubscriber;
  text: string;
  status: string;
  likes: number;
  responses: IResponse[];
  createdAt: Date;
}
