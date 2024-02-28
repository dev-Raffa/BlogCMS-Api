import { IPermissions } from '../../interface/permissions-model.domain';

export interface ICommentsPermissions extends IPermissions {
  answer: boolean;
}
