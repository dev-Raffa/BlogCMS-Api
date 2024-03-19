import { BaseService } from 'src/utils/builders/service/base.service';
import { IUser } from '../entity/user-entity.interface';

export interface IUserService extends BaseService<IUser> {
  validate: (user: string, password: string) => Promise<IUser>;
}
