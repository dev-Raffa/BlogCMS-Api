export function generateRandomString(radix: number = 36, len: number): string {
  if (radix < 2 || radix > 36)
    throw new Error('radix should be greatter than 1 and less than 37');

  let random: string = '';

  do {
    random += Math.random().toString(radix).substring(3);
  } while (random.length < len);

  return random.substring(0, len);
}
