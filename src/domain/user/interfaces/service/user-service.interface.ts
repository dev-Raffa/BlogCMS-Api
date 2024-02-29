import { IUser } from '../model/user-model.domain';

export interface IUserService {
  validate: (user: string, password: string) => Promise<IUser>;
}
