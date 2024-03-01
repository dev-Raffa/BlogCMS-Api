import { enumTLD } from '../../../utils/enums/tld/tld.enum';
import { DomainPattern } from './pattern/domain.pattern';

export function DomainValidator(domain: string) {
  domain.toLowerCase();
  const domainParts = DomainPattern.exec(domain);

  if (!domainParts) return false;

  const tld = domainParts[2].split('.');

  return tld.length > 2
    ? tld[tld.length - 1] in enumTLD && tld[tld.length - 2] in enumTLD
    : tld[tld.length - 1] in enumTLD;
}
