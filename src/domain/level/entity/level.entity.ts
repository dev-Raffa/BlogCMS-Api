import { IPermissions } from 'src/domain/permissions/interface/permissions-model.interface';

export interface ILevel {
  title: string;
  permissions: IPermissions[];
}
