import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../infra/database/database.module';
import { registerProviders } from '../../../../utils/helpers/register-providers/register-providers.helper';
import { RolesPostsEntity } from './entity/rolesPosts.entity';
import { RolesPostsService } from './service/rolesPosts.service';

@Module({
  imports: [DatabaseModule],
  providers: registerProviders(RolesPostsEntity, RolesPostsService)
})
export class RolesPostsModule {}
