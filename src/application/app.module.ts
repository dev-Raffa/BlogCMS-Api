import { Module } from '@nestjs/common';
import { ClientModule } from './contexts/client/client.module';
import { UserModule } from './contexts/user/user.module';
import { LevelModule } from './contexts/level/level.module';
import { AuthModule } from './contexts/auth/auth.module';
import { RolesCommmentsModule } from './contexts/roles/comments/rolesComments.module';
import { RolesPostsModule } from './contexts/roles/posts/rolesPost.module';
import { RolesUsersModule } from './contexts/roles/users/rolesUsers.module';
import { PostModule } from './contexts/post/post.module';
import { CommentModule } from './contexts/comment/comment.module';
import { ResponseModule } from './contexts/response/response.module';
import { SubscriberModule } from './contexts/subscriber/subscriber.module';

@Module({
  imports: [
    AuthModule,
    ClientModule,
    UserModule,
    LevelModule,
    RolesUsersModule,
    RolesPostsModule,
    RolesCommmentsModule,
    PostModule,
    CommentModule,
    ResponseModule,
    SubscriberModule
  ]
})
export class AppModule {}
