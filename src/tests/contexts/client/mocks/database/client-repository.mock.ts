import { IClient } from '../../../../../application/contexts/client/interfaces/entity/client-entity.interface';
import { ILevel } from '../../../../../application/contexts/level/interfaces/entity/level-entity.interface';
import { IUser } from '../../../../../application/contexts/user/interfaces/entity/user-entity.interface';
import { BaseRepository } from '../../../../../utils/builders/repository/base.repository';

export const DatabaseTableClientMock: IClient[] = [
  {
    id: 1,
    name: 'client test',
    domain: 'test.com',
    email: 'client@test.com',
    levels: [],
    users: []
  }
];

class Client implements IClient {
  id: number;
  name: string;
  email: string;
  domain: string;
  levels: ILevel[];
  users: IUser[];
  apiKey?: string;

  constructor(args: IClient) {
    this.id = args.id;
    this.name = args.name;
    this.email = args.email;
    this.domain = args.domain;
    this.levels = args.levels;
    this.users = args.users;
    this.apiKey = args.apiKey;
  }
}

export const ClientRepositoryMock = new BaseRepository<IClient>(
  DatabaseTableClientMock,
  Client
);
