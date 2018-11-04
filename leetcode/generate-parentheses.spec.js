import { parens } from './generate-parentheses.js';

test('parens', () => {
  expect(parens(1)).toEqual(['()']);
  expect(parens(2)).toEqual(['(())', '()()']);
  expect(parens(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
});
