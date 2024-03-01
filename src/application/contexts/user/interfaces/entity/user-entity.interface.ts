import { ILevel } from '../../../level/interfaces/entity/level-entity.interface';

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  level: ILevel;
}
