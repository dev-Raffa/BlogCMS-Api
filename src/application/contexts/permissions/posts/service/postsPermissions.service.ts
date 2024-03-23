import { BaseService } from '../../../../../utils/builders/service/base.service';
import { IPostsPermissionsService } from '../interfaces/service/postsPermissions-service.interface';
import { IPostsPermissions } from '../interfaces/entity/postsPermissions-entity.interface';

export class PostsPermissionsService
  extends BaseService<IPostsPermissions>
  implements IPostsPermissionsService {}
