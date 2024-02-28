import { IPermissions } from 'src/domain/permissions/interface/permissions-model.domain';

export interface ILevel {
  title: string;
  permissions: IPermissions[];
}
