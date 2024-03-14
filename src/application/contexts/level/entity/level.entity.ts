import { IRolesBase } from '../../roles/base/interface/roles-base.interface';
import { ILevel } from '../interfaces/entity/level-entity.interface';

export class LevelEntity implements ILevel {
  title: string;
  permissions: IRolesBase[];
}
