import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../infra/database/database.module';
import { registerProviders } from '../../../../utils/helpers/register-providers/register-providers.helper';
import { UsersPermissionsEntity } from './entity/usersPermissions.entity';
import { UsersPermissionsService } from './service/usersPermisions.service';

@Module({
  imports: [DatabaseModule],
  providers: registerProviders(UsersPermissionsEntity, UsersPermissionsService),
  exports: [
    {
      provide: 'USERS_PERMISSIONS_SERVICE',
      useClass: UsersPermissionsService
    }
  ]
})
export class UsersModule {}
