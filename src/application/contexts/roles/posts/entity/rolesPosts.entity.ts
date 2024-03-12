import { RolesBase } from '../../base/entity/roles-base.entity';
import { IRolesPosts } from '../interfaces/entity/rolesPosts-entity.interface';

export class RolesPostsEntity extends RolesBase implements IRolesPosts {
  publish: boolean;
}
