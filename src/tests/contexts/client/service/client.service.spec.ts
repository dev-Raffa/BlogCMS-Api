import { Test, TestingModule } from '@nestjs/testing';
import { IClientService } from '../../../../application/contexts/client/interfaces/service/client-service.interface';
import { ClientService } from '../../../../application/contexts/client/service/client.service';
import {
  ClientRepositoryMock,
  DatabaseTableClientMock
} from '../mocks/database/client-repository.mock';

describe('ClientService', () => {
  let service: IClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'SERVICE',
          useClass: ClientService
        },
        {
          provide: 'REPOSITORY',
          useValue: ClientRepositoryMock
        }
      ]
    }).compile();

    service = module.get<IClientService>('SERVICE');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a uuid v4 what is not exist in the database', async () => {
    const stringVerify = '/([A-Z])/';
    const uuids: string[] = DatabaseTableClientMock.map((item) => {
      return item.apiKey;
    });
    const result = await service.generateKey();

    expect(result).toHaveLength(32);
    expect(uuids).not.toContain(result);
    expect(stringVerify.match(result)).toBeNull();
  });
});
