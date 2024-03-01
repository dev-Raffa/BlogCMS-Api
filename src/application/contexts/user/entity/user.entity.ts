import { ILevel } from '../../level/interfaces/entity/level-entity.interface';
import { IUser } from '../interfaces/entity/user-entity.interface';

export class UserEntity implements IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  level: ILevel;
}
