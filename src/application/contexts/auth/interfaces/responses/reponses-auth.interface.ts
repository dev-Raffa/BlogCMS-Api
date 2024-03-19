import { IClient } from '../../../client/interfaces/entity/client-entity.interface';
import { IUser } from '../../../user/interfaces/entity/user-entity.interface';

export interface ISignupResponse {
  client: Pick<IClient, 'name' | 'apiKey'>;
  user: Pick<IUser, 'name' | 'email' | 'level'>;
}
