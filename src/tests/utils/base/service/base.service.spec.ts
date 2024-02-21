import { Test, TestingModule } from '@nestjs/testing';
import { IMockBaseEntity } from '../mocks/entity/base-entity.mock';
import { MockBaseService } from '../mocks/service/service.mock';
import { MockBaseRepository } from '../mocks/repository/base-repository.mock';
import { IRepository } from 'src/utils/base/repository/base.repository';
import { NotFoundException } from '@nestjs/common';

describe('BaseService', () => {
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

  describe('create', () => {
    const req: Omit<IMockBaseEntity, 'id'> = {
      name: 'teste',
      age: 24
    };

    it('should return a user when create with succes', async () => {
      const repositoryLentgh = repository.repository.length;

      const result = await service.add(req);

      expect(result).toEqual<IMockBaseEntity>({
        id: repositoryLentgh + 1,
        age: 24,
        name: 'teste'
      });
    });
  });

  describe('find', () => {
    it('should return all repository itens', async () => {
      const result = await service.getAll();
      expect(result).toEqual(repository.repository);
    });
  });

  describe('findOneBy', () => {
    it('sould throw not found exception when id is invalid', async () => {
      expect(service.getOneById(1)).rejects.toThrow(NotFoundException);
    });

    it('should return one entity when id is found', async () => {
      await service.add({ name: 'teste', age: 24 });
      await service.add({ name: 'teste2', age: 14 });
      await service.add({ name: 'teste3', age: 28 });

      const result = await service.getOneById(2);

      expect(result.age).toEqual(14);
    });
  });

  describe('update', () => {
    it('sould throw not found exception when id is invalid', async () => {
      expect(service.update(1, { age: 25, name: 'test' })).rejects.toThrow(
        NotFoundException
      );
    });

    it('should return entity update when updated successfully', async () => {
      await service.add({ name: 'teste', age: 24 });
      await service.add({ name: 'teste2', age: 14 });
      await service.add({ name: 'teste3', age: 28 });

      const result = await service.update(2, { age: 39 });

      expect(result).toEqual({ id: 2, name: 'teste2', age: 39 });
    });
  });

  describe('delete', () => {
    it('sould throw not found exception when id is invalid', async () => {
      expect(service.delete(1)).rejects.toThrow(NotFoundException);
    });

    it('should return upadated repository', async () => {
      await service.add({ name: 'teste', age: 24 });
      await service.add({ name: 'teste2', age: 14 });
      await service.add({ name: 'teste3', age: 28 });

      const result = await service.delete(1);

      expect(result).not.toContain({ id: 1, name: 'teste', age: 24 });
      expect(result.length).toEqual(2);
    });
  });
});