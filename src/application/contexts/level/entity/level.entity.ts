import { ILevel } from '../interfaces/entity/level-entity.interface';

export class LevelEntity implements ILevel {
  title: string;
  permissions: IPermissions[];
}
