import { BaseService } from 'src/utils/builders/service/base.service';
import { IPost } from '../interfaces/entity/post-entity.interface';
import { IPostService } from '../interfaces/service/post-service.interface';

export class PostService extends BaseService<IPost> implements IPostService {}
