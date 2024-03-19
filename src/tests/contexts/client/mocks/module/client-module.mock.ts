import { Module } from '@nestjs/common';
import { ClientService } from '../../../../../application/contexts/client/service/client.service';
import { ClientRepositoryMock } from '../database/client-repository.mock';

@Module({
  providers: [
    {
      provide: 'SERVICE',
      useClass: ClientService
    },
    {
      provide: 'REPOSITORY',
      useValue: ClientRepositoryMock
    }
  ],
  exports: [ClientService]
})
export class ClientModuleMock {}
