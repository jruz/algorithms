import { isValid } from './valid-parentheses.js';

test('isValid', () => {
  expect(isValid('(a)]')).toBe(false);
  expect(isValid('}()]')).toBe(false);
  expect(isValid(']')).toBe(false);
  expect(isValid('()[]{}')).toBe(true);
  expect(isValid('([])')).toBe(true);
  expect(isValid('')).toBe(true);
  expect(isValid('()')).toBe(true);
  expect(isValid('(]')).toBe(false);
  expect(isValid('([)]')).toBe(false);
  expect(isValid('(]{[]}')).toBe(false);
  expect(isValid('{[]}')).toBe(true);
});
