import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../infra/database/database.module';
import { registerProviders } from '../../../../utils/helpers/register-providers/register-providers.helper';
import { CommentsPermissionsEntity } from './entity/commentsPermissions.entity';
import { CommentsPermissionsService } from './service/commentsPermissions.service';

@Module({
  imports: [DatabaseModule],
  providers: registerProviders(
    CommentsPermissionsEntity,
    CommentsPermissionsService
  ),
  exports: [
    {
      provide: 'COMMENTS_PERMISSIONS_SERVICE',
      useClass: CommentsPermissionsService
    }
  ]
})
export class CommentsPermissionsModule {}
