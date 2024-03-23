import { BaseService } from 'src/utils/builders/service/base.service';
import { IRole } from '../entity/role-entity.interface';

export interface IRoleService extends BaseService<IRole> {
  create: (args) => Promise<IRole>;
}
