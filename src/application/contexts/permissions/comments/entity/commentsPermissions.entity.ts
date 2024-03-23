import { BasePermissions } from '../../base/entity/base-permissions.entity';
import { ICommentsPermisssions } from '../interfaces/entity/commentsPerm-entity.interface';

export class CommentsPermissionsEntity
  extends BasePermissions
  implements ICommentsPermisssions
{
  answer: boolean;
}
