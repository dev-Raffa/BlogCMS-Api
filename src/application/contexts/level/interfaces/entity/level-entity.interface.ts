import { IRolesComments } from 'src/application/contexts/roles/comments/interfaces/entity/rolesComments-entity.interface';
import { IRolesPosts } from 'src/application/contexts/roles/posts/interfaces/entity/rolesPosts-entity.interface';
import { IRolesUsers } from 'src/application/contexts/roles/users/interfaces/entity/rolesUsers-entity.inteface';

export interface ILevel {
  id: number;
  title: string;
  roles: {
    users?: IRolesUsers;
    posts?: IRolesPosts;
    comments?: IRolesComments;
  };
}
