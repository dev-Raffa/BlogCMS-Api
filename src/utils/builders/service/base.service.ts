import { Inject, NotFoundException } from '@nestjs/common';
import { IBaseEntity } from '../../interfaces/entitty/entity.interface';
import { IBaseService } from '../../interfaces/service/service.interface';
import { IRepository } from '../../interfaces/repository/repository.inteface';

export abstract class BaseService<T extends IBaseEntity>
  implements IBaseService<T>
{
  constructor(
    @Inject('REPOSITORY')
    protected readonly repository: IRepository<T>
  ) {}

  private async verifyId(id: number) {
    //@ts-expect-error Argument of type '{ id: number; }' is not assignable to parameter of type '{ [K in keyof T]?: T[K]; }'.
    return await this.repository.findOneBy({ id: id });
  }

  async add(args: Omit<T, 'id'>): Promise<T> {
    const newEntity = await this.repository.create(args);
    return await this.repository.save(newEntity);
  }

  async getAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async getOneById(id: number): Promise<T> {
    //@ts-expect-error Argument of type '{ id: number; }' is not assignable to parameter of type '{ [K in keyof T]?: T[K]; }'.
    const result = await this.repository.findOneBy({ id: id });

    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  async update(id: any, args: Partial<T>): Promise<T> {
    const verific = await this.verifyId(id);

    if (!verific) {
      throw new NotFoundException();
    }

    await this.repository.update(id, args);
    //@ts-expect-error Argument of type '{ id: number; }' is not assignable to parameter of type '{ [K in keyof T]?: T[K]; }'.
    return await this.repository.findOneBy({ id: +id });
  }

  async delete(id: number): Promise<T[]> {
    const verific = await this.verifyId(id);

    if (!verific) {
      throw new NotFoundException();
    }
    await this.repository.delete(id);
    return await this.repository.find();
  }
}
