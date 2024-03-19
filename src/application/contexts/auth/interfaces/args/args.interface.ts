import { IClient } from '../../../../../application/contexts/client/interfaces/entity/client-entity.interface';
import { IUser } from '../../../../../application/contexts/user/interfaces/entity/user-entity.interface';

export interface signinArgs {
  email: string;
  password: string;
}

export interface signupArgs {
  clientArgs: Pick<IClient, 'name' | 'domain' | 'email'>;
  userArgs: Pick<IUser, 'name' | 'email' | 'password'>;
}
