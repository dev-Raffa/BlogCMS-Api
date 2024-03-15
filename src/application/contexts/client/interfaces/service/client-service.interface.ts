import { IClient } from '../entity/client-entity.interface';

export interface IClientService {
  add: (args: Omit<IClient, 'id'>) => Promise<IClient>;
  getAll: () => Promise<IClient[]>;
  getOneById: (id: number) => Promise<IClient>;
  update: (id: any, args: Partial<IClient>) => Promise<IClient>;
  delete: (id: number) => Promise<IClient[]>;
  getOneByKey: (key: string) => Promise<IClient>;
  generateKey: () => Promise<string>;
}
