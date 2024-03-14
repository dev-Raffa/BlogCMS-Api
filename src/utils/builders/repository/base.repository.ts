import { IBaseEntity } from 'src/utils/interfaces/entitty/entity.interface';
import { IRepository } from 'src/utils/interfaces/repository/repository.inteface';

export class BaseRepository<T extends IBaseEntity> implements IRepository<T> {
  private repository: T[];
  private entity: any;

  constructor(r, e) {
    this.repository = r;
    this.entity = e;
  }

  private getId() {
    return this.repository.length + 1;
  }

  async create(args: Omit<T, 'id'>) {
    const id = this.getId();
    const newItem = {
      id: id,
      ...args
    };
    return new this.entity(newItem);
  }

  async save(args: T) {
    this.repository.push(args);
    return args;
  }

  async find() {
    return this.repository;
  }

  async findOneBy(args: { id: number }) {
    return this.repository.find((item) => item.id === args.id);
  }

  async update(id: number, args: Partial<T>) {
    const index = this.repository.findIndex((item) => item.id === id);
    Object.assign(this.repository[index], args);
    return this.repository[index];
  }

  async delete(id: number) {
    const index = this.repository.findIndex((item) => item.id === id);
    return this.repository.splice(index, 1);
  }
}
