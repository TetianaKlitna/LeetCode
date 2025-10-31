/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const n = mat.length;
  let sum = 0;
  let j = n - 1;
  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
    if (i !== j) sum += mat[j][i];
    j--;
  }

  return sum;
};
