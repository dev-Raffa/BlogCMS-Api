import { BaseService } from 'src/utils/builders/service/base.service';
import { IRolesPostsService } from '../interfaces/service/rolesPosts-service.interface';
import { IRolesPosts } from '../interfaces/entity/rolesPosts-entity.interface';

export class RolesPostsService
  extends BaseService<IRolesPosts>
  implements IRolesPostsService {}
