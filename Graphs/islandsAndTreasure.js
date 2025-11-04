class Solution {
  /**
   * @param {number[][]} grid
   */
  islandsAndTreasure(grid) {
    const n = grid.length;
    const m = grid[0].length;

    const fillDistance = (i, j, dist) => {
      if (i < 0 || j < 0 || i >= n || j >= m) return;

      if (grid[i][j] === -1) return;
      if (grid[i][j] < dist) return;

      grid[i][j] = dist;

      fillDistance(i - 1, j, dist + 1);
      fillDistance(i + 1, j, dist + 1);
      fillDistance(i, j - 1, dist + 1);
      fillDistance(i, j + 1, dist + 1);
    };

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 0) {
          fillDistance(i, j, 0);
        }
      }
    }
  }
}
