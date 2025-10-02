class Solution {
  /**
   * @param {number[][]} matrix
   * @return {number[]}
   */
  spiralOrder(matrix) {
    let top = 0;
    let bottom = matrix.length;

    let left = 0;
    let right = matrix[0].length;

    const res = [];

    while (left < right && top < bottom) {
      for (let i = left; i < right; i++) {
        res.push(matrix[top][i]);
      }
      top++;
      for (let j = top; j < bottom; j++) {
        res.push(matrix[j][right - 1]);
      }
      right--;

      if (!(left < right && top < bottom)) break;

      for (let i = right - 1; i >= left; i--) {
        res.push(matrix[bottom - 1][i]);
      }
      bottom--;
      for (let j = bottom - 1; j >= top; j--) {
        res.push(matrix[j][left]);
      }
      left++;
    }

    return res;
  }
}
