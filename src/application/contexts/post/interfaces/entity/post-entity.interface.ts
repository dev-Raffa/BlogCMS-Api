import { IComment } from '../../../comment/interfaces/entity/comment-entity.interface';
import { IUser } from '../../../user/interfaces/entity/user-entity.interface';

export interface IPost {
  id: number;
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
}
