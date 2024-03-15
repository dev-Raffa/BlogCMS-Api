import { generateRandomString } from '../../../../utils/helpers/generate-random/generate-random.helper';

describe('generateRandomString', () => {
  it('should throw a error when radix is less 2', () => {
    expect(() => generateRandomString(1, 8)).toThrow(
      'radix should be greatter than 1 and less than 37'
    );
  });

  it('should throw a error when radix is greater 36', () => {
    expect(() => generateRandomString(37, 8)).toThrow(
      'radix should be greatter than 1 and less than 37'
    );
  });

  it('should be a random string with 32 chars and without char g', () => {
    const result = generateRandomString(16, 32);

    expect(result).toHaveLength(32);
    expect(result).not.toContain('g');
  });
});
