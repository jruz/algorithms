export const twoSum = (nums, target) => {
  let res = [];
  const table = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const index = table[diff];
    if (index != null) {
      res = [index, i];
      break;
    }
    table[nums[i]] = i;
  }
  return res;
};
