import { ICommentsPermisssions } from '../../../permissions/comments/interfaces/entity/commentsPerm-entity.interface';
import { IPostsPermissions } from '../../../permissions/posts/interfaces/entity/postsPermissions-entity.interface';
import { IUsersPermissions } from '../../../permissions/users/interfaces/entity/usersPermissions-entity.inteface';

export interface IRole {
  id: number;
  title: string;
  allowed: {
    users?: IUsersPermissions;
    posts?: IPostsPermissions;
    comments?: ICommentsPermisssions;
  };
}
