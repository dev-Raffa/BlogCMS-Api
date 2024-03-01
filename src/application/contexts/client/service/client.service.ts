import { BaseService } from '../../../../utils/builders/service/base.service';
import { IClient } from '../interfaces/entity/client-entity.interface';
import { IClientService } from '../interfaces/service/client-service.interface';

export class ClientService
  extends BaseService<IClient>
  implements IClientService
{
  generateKey: () => Promise<string>;
  getOneByKey: (key: string) => Promise<IClient>;
}
