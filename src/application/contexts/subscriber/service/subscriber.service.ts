import { BaseService } from '../../../../utils/builders/service/base.service';
import { ISubscriber } from '../interfaces/entity/subscriber-entity.interface';
import { ISubscriberService } from '../interfaces/service/subscriber-service.interface';

export class SubscriberService
  extends BaseService<ISubscriber>
  implements ISubscriberService {}
