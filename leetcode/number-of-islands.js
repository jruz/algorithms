export const numIslands = (g) => {
  let islands = 0;
  const grid = g;
  const lookAround = (y, x) => {
    if (y < 0 || x < 0) return;
    grid[y][x] = '0';
    const t = grid[y - 1] && grid[y - 1][x];
    const b = grid[y] && grid[y][x + 1];
    const r = grid[y + 1] && grid[y + 1][x];
    const l = grid[y] && grid[y][x - 1];
    if (t === '1') lookAround(y - 1, x);
    if (b === '1') lookAround(y, x + 1);
    if (r === '1') lookAround(y + 1, x);
    if (l === '1') lookAround(y, x - 1);
  };
  for (let i = 0; i < grid.length; i++) {
    for (let x = 0; x < grid[i].length; x++) {
      if (grid[i][x] === '1') {
        lookAround(i, x);
        islands += 1;
      }
    }
  }
  return islands;
};
