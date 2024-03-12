import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { registerProviders } from 'src/utils/helpers/register-providers/register-providers.helper';
import { RolesUsersEntity } from './entity/rolesUsers.entity';
import { RolesUsersService } from './service/rolesUsers.service';

@Module({
  imports: [DatabaseModule],
  providers: registerProviders(RolesUsersEntity, RolesUsersService)
})
export class RolesUsersModule {}
