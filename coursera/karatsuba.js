const firstHalf = (number, size) => Math.floor(number / 10 ** size);

const secondHalf = (number, size) => number % 10 ** size;

export const karatsuba = (x, y) => {
  if (x < 10 && y < 10) return x * y;
  const n = Math.max(String(x).length, String(y).length);
  const s = Math.ceil(n / 2);
  const x1 = firstHalf(x, s);
  const x2 = secondHalf(x, s);
  const y1 = firstHalf(y, s);
  const y2 = secondHalf(y, s);
  const k1 = karatsuba(x1, y1);
  const k2 = karatsuba(x2, y2);
  const k3 = karatsuba(x1 + x2, y1 + y2);
  return x1 * y1 * 10 ** n + (k3 - k1 - k2) * 10 ** (n / 2) + x2 * y2;
};
