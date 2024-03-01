import { EmailValidator } from '../../../../utils/validators/email/email.validator';

describe('email validator', () => {
  it('should return false when email format is not valid', () => {
    const testEmail_A = EmailValidator('juninho.com');
    const testEmail_B = EmailValidator('junho@@company.com');
    const testEmail_C = EmailValidator('junho@company.');
    const testEmail_D = EmailValidator('@company.com');

    expect(testEmail_A).toBe(false);
    expect(testEmail_B).toBe(false);
    expect(testEmail_C).toBe(false);
    expect(testEmail_D).toBe(false);
  });

  it('should return false when top-level domain is invalid', () => {
    const testEmail = EmailValidator('juninho@company.teste.com');

    expect(testEmail).toBe(false);
  });

  it('should return true when email format and top-level domain are valid', () => {
    const testEmail = EmailValidator('juninho@company.com');

    expect(testEmail).toBe(true);
  });
});
