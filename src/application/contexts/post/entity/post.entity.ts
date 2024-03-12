import { IComment } from '../../comment/interfaces/entity/comment-entity.interface';
import { IUser } from '../../user/interfaces/entity/user-entity.interface';
import { IPost } from '../interfaces/entity/post-entity.interface';

export class PostEntity implements IPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  article: string;
  author: IUser;
  status: string;
  createdAt: Date;
  publishedAt: Date;
  lastUpdate: Date;
  views: number;
  likes: number;
  comments: IComment[];
}
