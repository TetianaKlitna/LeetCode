class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    if (m === 1 && n === 1) {
      return matrix[0][0] === target;
    }

    if (target < matrix[0][0] || matrix[m - 1][n - 1] < target) return false;

    let start = 0;
    let end = m * n - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const j = mid % n;
      const i = (mid - j) / n;
      const val = matrix[i][j];
      if (val === target) {
        return true;
      } else if (val > target) {
        end = mid - 1;
      } else if (val < target) {
        start = mid + 1;
      }
    }

    return false;
  }
}
