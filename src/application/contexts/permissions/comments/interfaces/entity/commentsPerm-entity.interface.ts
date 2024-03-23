import { IBasePermissions } from '../../../base/interface/base-permissions.interface';

export interface ICommentsPermisssions extends IBasePermissions {
  answer: boolean;
}
