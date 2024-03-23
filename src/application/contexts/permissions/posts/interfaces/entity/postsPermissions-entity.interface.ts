import { IBasePermissions } from '../../../base/interface/base-permissions.interface';

export interface IPostsPermissions extends IBasePermissions {
  publish: boolean;
}
