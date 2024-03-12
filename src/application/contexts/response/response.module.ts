import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infra/database/database.module';
import { registerProviders } from '../../../utils/helpers/register-providers/register-providers.helper';
import { ResponseEntity } from './entity/response.entity';
import { ResponseService } from './service/response.service';

@Module({
  imports: [DatabaseModule],
  providers: registerProviders(ResponseEntity, ResponseService)
})
export class ResponseModule {}
