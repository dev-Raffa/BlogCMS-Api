import { ICommentsPermisssions } from '../../../permissions/comments/interfaces/entity/commentsPerm-entity.interface';
import { IPostsPermissions } from '../../../permissions/posts/interfaces/entity/postsPermissions-entity.interface';
import { IUsersPermissions } from '../../../permissions/users/interfaces/entity/usersPermissions-entity.inteface';

export class createLevelDTO {
  title: string;
  roles: {
    users?: Omit<IUsersPermissions, 'id'>;
    posts?: Omit<IPostsPermissions, 'id'>;
    comments?: Omit<ICommentsPermisssions, 'id'>;
  };
}
