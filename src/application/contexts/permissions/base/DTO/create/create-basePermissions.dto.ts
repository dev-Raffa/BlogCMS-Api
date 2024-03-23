import { IBasePermissions } from '../../interface/base-permissions.interface';

export class createBasePermissionsDTO implements Omit<IBasePermissions, 'id'> {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;

  constructor(args: Omit<IBasePermissions, 'id'>) {
    this.create = args.create;
    this.read = args.read;
    this.update = args.update;
    this.delete = args.update;
  }
}
