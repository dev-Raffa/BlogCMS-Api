import { Test, TestingModule } from '@nestjs/testing';
import { IMockBaseEntity } from '../../../mocks/entity/base-entity.mock';
import { MockBaseRepository } from '../../../mocks/repository/base-repository.mock';
import { MockBaseService } from '../../../mocks/service/service.mock';
import { IRepository } from '../../../../utils/interfaces/repository/repository.inteface';

describe('register provider', () => {
  let service: MockBaseService;
  let repository: IRepository<IMockBaseEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'SERVICE',
          useClass: MockBaseService
        },
        {
          provide: 'REPOSITORY',
          useClass: MockBaseRepository
        }
      ]
    }).compile();

    service = module.get<MockBaseService>('SERVICE');
    repository = module.get<IRepository<IMockBaseEntity>>('REPOSITORY');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });
});
