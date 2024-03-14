import { DomainValidator } from '../../../../utils/validators/domain/domain.validator';

describe('domain validator', () => {
  const validator = new DomainValidator();
  it('should return false when domain format is invalid', () => {
    const testDomain_A = validator.validate('company@company.com');
    const testDomain_B = validator.validate('company_com');
    const testDomain_C = validator.validate('.company.com');

    expect(testDomain_A).toBe(false);
    expect(testDomain_B).toBe(false);
    expect(testDomain_C).toBe(false);
  });

  it('should return false when top-level domain is invalid', () => {
    const testDomain = validator.validate('company.xyz.com');

    expect(testDomain).toBe(false);
  });

  it('should true when domain format and tld are valid', () => {
    const testDomain_A = validator.validate('company.com.br');
    const testDomain_B = validator.validate('company.com');

    expect(testDomain_A).toBe(true);
    expect(testDomain_B).toBe(true);
  });
});
