import { IRolesBase } from '../interface/roles-base.interface';

export class RolesBase implements IRolesBase {
  id: number;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}
