import { BaseService } from '../../../../utils/builders/service/base.service';
import { IComment } from '../interfaces/entity/comment-entity.interface';
import { ICommentService } from '../interfaces/service/comment-service.interface';

export class CommentService
  extends BaseService<IComment>
  implements ICommentService {}
