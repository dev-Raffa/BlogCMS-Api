import { BaseService } from '../../../../../utils/builders/service/base.service';
import { IUsersPermissions } from '../interfaces/entity/usersPermissions-entity.inteface';
import { IUsersPermissionsService } from '../interfaces/service/usersPermissions-service.interface';

export class UsersPermissionsService
  extends BaseService<IUsersPermissions>
  implements IUsersPermissionsService {}
