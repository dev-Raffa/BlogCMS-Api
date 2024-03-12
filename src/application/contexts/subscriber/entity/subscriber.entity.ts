import { ISubscriber } from '../interfaces/entity/subscriber-entity.interface';

export class SubscriberEntity implements ISubscriber {
  id: number;
  name: string;
  email: string;
  password: string;
  notify: boolean;
  key?: string;
}
