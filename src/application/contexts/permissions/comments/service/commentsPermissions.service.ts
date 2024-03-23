import { BaseService } from 'src/utils/builders/service/base.service';
import { ICommentsPermissionsService } from '../interfaces/service/commentsPerm-service.interface';
import { ICommentsPermisssions } from '../interfaces/entity/commentsPerm-entity.interface';

export class CommentsPermissionsService
  extends BaseService<ICommentsPermisssions>
  implements ICommentsPermissionsService {}
