import { createBasePermissionsDTO } from '../../../base/DTO/create/create-basePermissions.dto';
import { ICommentsPermisssions } from '../../interfaces/entity/commentsPerm-entity.interface';

export class createCommentsPermissionsDTO
  extends createBasePermissionsDTO
  implements Omit<ICommentsPermisssions, 'id'>
{
  answer: boolean;

  constructor(args: Omit<ICommentsPermisssions, 'id'>) {
    super({
      create: args.create,
      read: args.read,
      update: args.update,
      delete: args.update
    });
    this.answer = args.answer;
  }
}
