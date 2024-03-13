import { IValidator } from 'src/utils/interfaces/validator/validator.interface';
import { enumTLD } from '../../../utils/enums/tld/tld.enum';
import { DomainPattern } from './pattern/domain.pattern';

export class DomainValidator implements IValidator {
  validate(arg: any): boolean {
    arg.toLowerCase();
    const domainParts = DomainPattern.exec(arg);

    if (!domainParts) return false;

    const tld = domainParts[2].split('.');

    return tld.length > 2
      ? tld[tld.length - 1] in enumTLD && tld[tld.length - 2] in enumTLD
      : tld[tld.length - 1] in enumTLD;
  }
}
