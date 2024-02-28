import { ILevel } from 'src/domain/level/model/level-model.domain';
import { IUser } from 'src/domain/user/model/user-model.domain';

export interface IClient {
  id: number;
  name: string;
  domain: string;
  email: string;
  apiKey?: string;
  users: IUser[];
  levels: ILevel[];
}
