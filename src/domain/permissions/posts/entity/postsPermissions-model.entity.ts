import { IPermissions } from '../../interface/permissions-model.interface';

export interface IPostsPermissions extends IPermissions {
  publish: boolean;
}
