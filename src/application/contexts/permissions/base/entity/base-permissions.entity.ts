import { IBasePermissions } from '../interface/base-permissions.interface';

export class BasePermissions implements IBasePermissions {
  id: number;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}
