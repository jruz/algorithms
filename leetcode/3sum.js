/* eslint-disable no-param-reassign, no-console */
export const threeSum = (nums) => {
  const res = {};
  const sorted = [...nums];
  const split = (array, left, right, pivot) => {
    while (left <= right) {
      while (array[left] < pivot) left++;
      while (array[right] > pivot) right--;
      if (left <= right) {
        const temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
      }
    }
    return left;
  };
  const quickSort = (array, left, right) => {
    if (left >= right) return;
    const pivot = array[Math.floor((left + right) / 2)];
    const index = split(array, left, right, pivot);
    quickSort(array, left, index - 1);
    quickSort(array, index, right);
  };
  quickSort(sorted, 0, sorted.length - 1);
  for (let a = 0; a < sorted.length - 2; a++) {
    const n1 = sorted[a];
    let lo = a + 1;
    let hi = sorted.length - 1;
    while (lo < hi) {
      const n2 = sorted[lo];
      const n3 = sorted[hi];
      const id = `${n1}${n2}${n3}`;
      if (n1 + n2 + n3 === 0) {
        if (!res[id]) res[id] = [n1, n2, n3];
        while (lo < hi && n2 == sorted[lo + 1]) lo++;
        while (lo < hi && n2 == sorted[hi - 1]) hi--;
        lo++;
        hi--;
      } else if (n2 + n3 < n1) {
        lo++;
      } else {
        hi--;
      }
    }
  }
  return Object.values(res);
};
