import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/infra/database/database.module';
import { registerProviders } from 'src/utils/helpers/register-providers/register-providers.helper';
import { ClientEntity } from './entity/client.entity';
import { ClientService } from './service/client.service';

@Module({
  imports: [DatabaseModule],
  providers: registerProviders(ClientEntity, ClientService)
})
export class ClientModule {}
