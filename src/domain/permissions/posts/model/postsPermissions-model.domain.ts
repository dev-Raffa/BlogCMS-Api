import { IPermissions } from '../../interface/permissions-model.domain';

export interface IPostsPermissions extends IPermissions {
  publish: boolean;
}
