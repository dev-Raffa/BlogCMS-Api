import { Test, TestingModule } from '@nestjs/testing';
import { IClientService } from '../../../../application/contexts/client/interfaces/service/client-service.interface';
import { ClientService } from '../../../../application/contexts/client/service/client.service';
import {
  ClientRepositoryMock,
  DatabaseTableClientMock
} from '../mocks/database/client-repository.mock';
import { NotFoundException } from '@nestjs/common';
import { IClient } from '../../../../application/contexts/client/interfaces/entity/client-entity.interface';

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

  describe('generateKey', () => {
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

  describe('getOneByKey', () => {
    it('should throw not found exception when key is not found', async () => {
      const key = 'b7f2a7fc-d07f-4e79-b8fe-57cf55a57119';

      await expect(() => service.getOneByKey(key)).rejects.toThrow(
        NotFoundException
      );
    });

    it('should return a client when key is found', async () => {
      const result = await service.getOneByKey(
        DatabaseTableClientMock[0].apiKey
      );

      expect(result).toBeDefined();
      expect(result).toMatchObject<IClient>(DatabaseTableClientMock[0]);
    });
  });
});
