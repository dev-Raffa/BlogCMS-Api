import { IValidator } from '../../../utils/interfaces/validator/validator.interface';
import { enumTLD } from '../../../utils/enums/tld/tld.enum';
import { EmailPattern } from './pattern/email.patern';

export class EmailValidator implements IValidator {
  validate(email: string): boolean {
    email.toLowerCase();
    const emailParts = EmailPattern.exec(email);

    if (!emailParts) {
      return false;
    }

    const tld = emailParts[3].split('.');

    return tld.length > 2
      ? tld[tld.length - 1] in enumTLD && tld[tld.length - 2] in enumTLD
      : tld[tld.length - 1] in enumTLD;
  }
}
