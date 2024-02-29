import { IComment } from '../../comment/entity/comment.entity';
import { IUser } from '../../user/model/user-model.domain';

export interface IPost {
  author: IUser;
  title: string;
  description: string;
  imageUrl: string;
  article: string;
  status: string;
  comments: IComment[];
  likes: number;
  views: number;
  createdAt: Date;
  publishedAt: Date;
  lastUpdate: Date;
  deletedAt: Date;
}
