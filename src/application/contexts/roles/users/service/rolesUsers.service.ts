import { BaseService } from '../../../../../utils/builders/service/base.service';
import { IRolesUsers } from '../interfaces/entity/rolesUsers-entity.inteface';
import { IRolesUsersService } from '../interfaces/service/rolesUsers-service.interface';

export class RolesUsersService
  extends BaseService<IRolesUsers>
  implements IRolesUsersService {}
