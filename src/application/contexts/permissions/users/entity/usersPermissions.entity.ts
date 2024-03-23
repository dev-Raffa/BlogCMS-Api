import { BasePermissions } from '../../base/entity/base-permissions.entity';
import { IUsersPermissions } from '../interfaces/entity/usersPermissions-entity.inteface';

export class UsersPermissionsEntity
  extends BasePermissions
  implements IUsersPermissions {}
