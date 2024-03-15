import { IClient } from '../../client/interfaces/entity/client-entity.interface';
import { IUser } from '../../user/interfaces/entity/user-entity.interface';

export interface signinArgs {
  email: string;
  password: string;
}

export interface signupArgs {
  clientArgs: IClient;
  userArgs: IUser;
}
