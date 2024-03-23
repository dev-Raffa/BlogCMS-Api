import { BasePermissions } from '../../base/entity/base-permissions.entity';
import { IPostsPermissions } from '../interfaces/entity/postsPermissions-entity.interface';

export class PostsPermissionsEntity
  extends BasePermissions
  implements IPostsPermissions
{
  publish: boolean;
}
