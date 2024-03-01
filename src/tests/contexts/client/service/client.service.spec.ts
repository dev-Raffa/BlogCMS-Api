import { Test, TestingModule } from '@nestjs/testing';
import { ClientEntity } from '../../../../application/contexts/client/entity/client.entity';
import { IClientService } from '../../../../application/contexts/client/interfaces/service/client-service.interface';
import { ClientService } from '../../../../application/contexts/client/service/client.service';
import { DatabaseModule } from '../../../../infra/database/database.module';
import { registerProviders } from '../../../../utils/helpers/register-providers/register-providers.helper';

describe('ClientService', () => {
  let service: IClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: registerProviders(ClientEntity, ClientService)
    }).compile();

    service = module.get<IClientService>('SERVICE');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe.skip('add', () => {});
});
