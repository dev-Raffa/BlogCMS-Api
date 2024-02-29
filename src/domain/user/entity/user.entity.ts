import { ILevel } from 'src/domain/level/model/level-model.domain';

export interface IUser {
  name: string;
  email: string;
  password: string;
  level: ILevel;
}
