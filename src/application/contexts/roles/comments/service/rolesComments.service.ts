import { BaseService } from 'src/utils/builders/service/base.service';
import { IRolesCommentsService } from '../interfaces/service/rolesComents-service.interface';
import { IRolesComments } from '../interfaces/entity/rolesComments-entity.interface';

export class RolesCommentsService
  extends BaseService<IRolesComments>
  implements IRolesCommentsService {}
