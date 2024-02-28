import { IClient } from '../entity/client.entity';

export interface IClientService {
  generateKey: () => Promise<string>;
  getOneByKey: (key: string) => Promise<IClient>;
}
