import { BaseService } from 'src/utils/builders/service/base.service';
import { IRoleService } from '../interfaces/service/role-service.interface';
import { IRole } from '../interfaces/entity/role-entity.interface';

export class RoleService extends BaseService<IRole> implements IRoleService {
  create: (args: any) => Promise<IRole>;
}
