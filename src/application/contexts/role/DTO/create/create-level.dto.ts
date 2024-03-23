import { IRolesComments } from '../../../roles/comments/interfaces/entity/rolesComments-entity.interface';
import { IRolesPosts } from '../../../roles/posts/interfaces/entity/rolesPosts-entity.interface';
import { IRolesUsers } from '../../../roles/users/interfaces/entity/rolesUsers-entity.inteface';

export class createLevelDTO {
  title: string;
  roles: {
    users?: Omit<IRolesUsers, 'id'>;
    posts?: Omit<IRolesPosts, 'id'>;
    comments?: Omit<IRolesComments, 'id'>;
  };
}
