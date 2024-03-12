import { BaseService } from '../../../../utils/builders/service/base.service';
import { IResponse } from '../interfaces/entity/response-entity.interface';
import { IResponseService } from '../interfaces/service/response-service.interface';

export class ResponseService
  extends BaseService<IResponse>
  implements IResponseService {}
