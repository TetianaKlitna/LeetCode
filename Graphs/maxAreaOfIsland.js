class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  maxAreaOfIsland(grid) {
    const n = grid.length;
    const m = grid[0].length;

    let maxArea = 0;

    const search = (i, j) => {
      if (i < 0 || j < 0 || i > n - 1 || j > m - 1) return 0;

      if (grid[i][j] === 0) return 0;

      grid[i][j] = 0;
      let currMax = 1;

      currMax += search(i - 1, j);
      currMax += search(i, j + 1);
      currMax += search(i, j - 1);
      currMax += search(i + 1, j);

      return currMax;
    };

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 1) {
          maxArea = Math.max(search(i, j), maxArea);
        }
      }
    }

    return maxArea;
  }
}
