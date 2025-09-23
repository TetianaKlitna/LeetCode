class Solution {
  /**
   * @param {character[][]} grid
   * @return {number}
   */
  numIslands(grid) {
    let num = 0;

    const setZero = (i, j) => {
      if (i < 0 || i >= grid.length) return;
      if (j < 0 || j >= grid[i].length) return;
      if (grid[i][j] === '0') return;

      grid[i][j] = '0';

      setZero(i - 1, j);
      setZero(i + 1, j);
      setZero(i, j + 1);
      setZero(i, j - 1);
    };

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === '1') {
          num++;
          setZero(i, j);
        }
      }
    }

    return num;
  }
}
