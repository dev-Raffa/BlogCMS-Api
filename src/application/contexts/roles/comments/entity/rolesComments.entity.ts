import { RolesBase } from '../../base/entity/roles-base.entity';
import { IRolesComments } from '../interfaces/entity/rolesComments-entity.interface';

export class RolesCommentsEntity extends RolesBase implements IRolesComments {
  answer: boolean;
}
