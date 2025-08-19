/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let res = 0;

  const freq = {};
  for (const row of grid) {
    const key = row.join(',');
    if (!freq[key]) freq[key] = 0;
    freq[key]++;
  }

  const n = grid.length;
  const col = new Array(n);
  for (let j = 0; j < n; j++) {
    const col = new Array(n);
    for (let i = 0; i < n; i++) {
      col[i] = grid[i][j];
    }
    const key = col.join(',');
    if (freq[key]) {
      res += freq[key];
    }
  }

  return res;
};
