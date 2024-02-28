import { IComment } from 'src/domain/comment/model/comment-model.domain';
import { IUser } from 'src/domain/user/model/user-model.domain';

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
