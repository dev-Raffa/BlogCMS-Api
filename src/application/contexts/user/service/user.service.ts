import { BaseService } from '../../../../utils/builders/service/base.service';
import { IUser } from '../interfaces/entity/user-entity.interface';
import { IUserService } from '../interfaces/service/user-service.interface';

export class UserService extends BaseService<IUser> implements IUserService {
  validate: (user: string, password: string) => Promise<IUser>;
}
