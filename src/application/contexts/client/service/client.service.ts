import { generateRandomString } from '../../../../utils/helpers/generate-random/generate-random.helper';
import { BaseService } from '../../../../utils/builders/service/base.service';
import { IClient } from '../interfaces/entity/client-entity.interface';
import { IClientService } from '../interfaces/service/client-service.interface';

export class ClientService
  extends BaseService<IClient>
  implements IClientService
{
  getOneByKey: (key: string) => Promise<IClient>;
  async generateKey(): Promise<string> {
    let key: string;
    const keysInUse: string[] = (await this.getAll()).map(
      (client) => client.apiKey
    );

    do {
      key = '';

      for (let i = 0; i < 5; i++) {
        i === 0 && (key += `${generateRandomString(36, 8)}-`);
        i > 0 && i < 4 && (key += `${generateRandomString(36, 4)}-`);
        i === 4 && (key += generateRandomString(36, 8));
      }
    } while (keysInUse.includes(key));

    return key;
  }
}
