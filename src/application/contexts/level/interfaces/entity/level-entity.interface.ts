import { IRolesBase } from '../../../roles/base/interface/roles-base.interface';

export interface ILevel {
  title: string;
  permissions: IRolesBase[];
}
