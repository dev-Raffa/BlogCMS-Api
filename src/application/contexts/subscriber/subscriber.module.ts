import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infra/database/database.module';
import { registerProviders } from '../../../utils/helpers/register-providers/register-providers.helper';
import { SubscriberEntity } from './entity/subscriber.entity';
import { SubscriberService } from './service/subscriber.service';

@Module({
  imports: [DatabaseModule],
  providers: registerProviders(SubscriberEntity, SubscriberService)
})
export class SubscriberModule {}
