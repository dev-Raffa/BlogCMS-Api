import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { registerProviders } from 'src/utils/helpers/register-providers/register-providers.helper';
import { RoleEntity } from './entity/role.entity';
import { RoleService } from './service/role.service';

@Module({
  imports: [DatabaseModule],
  providers: registerProviders(RoleEntity, RoleService),
  exports: [
    {
      provide: 'ROLE_SERVICE',
      useClass: RoleService
    }
  ]
})
export class RoleModule {}
