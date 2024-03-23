import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../infra/database/database.module';
import { registerProviders } from '../../../../utils/helpers/register-providers/register-providers.helper';
import { PostsPermissionsEntity } from './entity/postsPermissions.entity';
import { PostsPermissionsService } from './service/postsPermissions.service';

@Module({
  imports: [DatabaseModule],
  providers: registerProviders(PostsPermissionsEntity, PostsPermissionsService),
  exports: [
    {
      provide: 'POSTS_PERMISSIONS_SERVICE',
      useClass: PostsPermissionsService
    }
  ]
})
export class PostsModule {}
