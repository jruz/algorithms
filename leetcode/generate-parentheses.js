export const parens = (n) => {
  const res = [];
  const generate = (s, left, right) => {
    if (left < n) {
      generate(`${s}(`, left + 1, right);
    }
    if (right < left) {
      generate(`${s})`, left, right + 1);
    }
    if (s.length === n * 2) res.push(s);
  };
  generate('', 0, 0);
  return res;
};
