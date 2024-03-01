import { DomainValidator } from '../../../../utils/validators/domain/domain.validator';

describe('domain validator', () => {
  it('should return false when domain format is invalid', () => {
    const testDomain_A = DomainValidator('company@company.com');
    const testDomain_B = DomainValidator('company_com');
    const testDomain_C = DomainValidator('.company.com');

    expect(testDomain_A).toBe(false);
    expect(testDomain_B).toBe(false);
    expect(testDomain_C).toBe(false);
  });

  it('should return false when top-level domain is invalid', () => {
    const testDomain = DomainValidator('company.xyz.com');

    expect(testDomain).toBe(false);
  });

  it('should true when domain format and tld are valid', () => {
    const testDomain_A = DomainValidator('company.com.br');
    const testDomain_B = DomainValidator('company.com');

    expect(testDomain_A).toBe(true);
    expect(testDomain_B).toBe(true);
  });
});
