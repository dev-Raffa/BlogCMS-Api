import { IBasePermissions } from '../../interface/base-permissions.interface';

export class updateBasePermissionsDTO
  implements Partial<Omit<IBasePermissions, 'id'>>
{
  create?: boolean;
  read?: boolean;
  update?: boolean;
  delete?: boolean;

  constructor(args: Partial<Omit<IBasePermissions, 'id'>>) {
    args.create && (this.create = args.create);
    args.read && (this.read = args.read);
    args.update && (this.update = args.update);
    args.delete && (this.delete = args.delete);
  }
}
