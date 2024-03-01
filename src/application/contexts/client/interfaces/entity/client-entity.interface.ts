import { ILevel } from '../../../level/interfaces/entity/level-entity.interface';
import { IUser } from '../../../user/interfaces/entity/user-entity.interface';

export interface IClient {
  id: number;
  name: string;
  domain: string;
  email: string;
  apiKey?: string;
  users: IUser[];
  levels: ILevel[];
}
