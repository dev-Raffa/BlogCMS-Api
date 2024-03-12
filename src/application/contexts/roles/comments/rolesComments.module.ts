import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { registerProviders } from 'src/utils/helpers/register-providers/register-providers.helper';
import { RolesCommentsService } from './service/rolesComments.service';
import { RolesCommentsEntity } from './entity/rolesComments.entity';

@Module({
  imports: [DatabaseModule],
  providers: registerProviders(RolesCommentsEntity, RolesCommentsService)
})
export class RolesCommmentsModule {}
