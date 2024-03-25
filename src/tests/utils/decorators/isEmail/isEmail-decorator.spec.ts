import { EmailValidator } from '../../../../utils/validators/email/email.validator';
import { Validate } from '../../../../utils/decorators/Validate/validate.decorator';
import { isEmail } from '../../../../utils/decorators/isEmail/isEmail.decorator';

jest.mock('../../../../utils/decorators/validate/validate.decorator', () => ({
  Validate: jest.fn()
}));

describe('isEmail decorator', () => {
  it('should call Validate decorator with EmailValidator', () => {
    const emailDecorator = isEmail();
    emailDecorator;

    expect(Validate).toHaveBeenCalledWith(new EmailValidator());
  });
});
