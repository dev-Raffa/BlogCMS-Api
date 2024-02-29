import { IResponse } from 'src/domain/response/model/response-model.domain';
import { ISubscriber } from 'src/domain/subscriber/model/subscriber-model.domain';

export interface IComment {
  id: number;
  author: ISubscriber;
  text: string;
  status: string;
  likes: number;
  responses: IResponse[];
  createdAt: Date;
  deletedAt: Date;
}
