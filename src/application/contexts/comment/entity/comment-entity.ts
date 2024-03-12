import { IResponse } from '../../response/interfaces/entity/response-entity.interface';
import { ISubscriber } from '../../subscriber/interfaces/entity/subscriber-entity.interface';
import { IComment } from '../interfaces/entity/comment-entity.interface';

export class CommentEntity implements IComment {
  id: number;
  author: ISubscriber;
  text: string;
  status: string;
  createdAt: Date;
  likes: number;
  responses: IResponse[];
}
