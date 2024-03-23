import { IRolesComments } from '../../roles/comments/interfaces/entity/rolesComments-entity.interface';
import { IRolesPosts } from '../../roles/posts/interfaces/entity/rolesPosts-entity.interface';
import { IRolesUsers } from '../../roles/users/interfaces/entity/rolesUsers-entity.inteface';
import { IRole } from '../interfaces/entity/role-entity.interface';

export class RoleEntity implements IRole {
  id: number;
  title: string;
  allowed: {
    users?: IRolesUsers;
    posts?: IRolesPosts;
    comments?: IRolesComments;
  };
}
