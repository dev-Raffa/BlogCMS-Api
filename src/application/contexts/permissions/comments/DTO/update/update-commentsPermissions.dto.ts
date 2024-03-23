import { updateBasePermissionsDTO } from '../../../base/DTO/update/update-basePermissions.dto';
import { ICommentsPermisssions } from '../../interfaces/entity/commentsPerm-entity.interface';

export class updateCommentsPermissionsDTO
  extends updateBasePermissionsDTO
  implements Partial<Omit<ICommentsPermisssions, 'id'>>
{
  answer?: boolean;

  constructor(args: Partial<Omit<ICommentsPermisssions, 'id'>>) {
    super({
      create: args.create,
      read: args.read,
      update: args.update,
      delete: args.delete
    });
    args.answer && (this.answer = args.answer);
  }
}
