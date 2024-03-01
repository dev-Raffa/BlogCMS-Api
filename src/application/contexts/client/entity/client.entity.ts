import { ILevel } from '../../level/interfaces/entity/level-entity.interface';
import { IUser } from '../../user/interfaces/entity/user-entity.interface';
import { IClient } from '../interfaces/entity/client-entity.interface';

export class ClientEntity implements IClient {
  id: number;
  name: string;
  email: string;
  domain: string;
  apiKey?: string;
  levels: ILevel[];
  users: IUser[];
}
