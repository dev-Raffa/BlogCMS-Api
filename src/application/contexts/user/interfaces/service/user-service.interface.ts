import { IUser } from '../entity/user-entity.interface';

export interface IUserService {
  validate: (user: string, password: string) => Promise<IUser>;
}
