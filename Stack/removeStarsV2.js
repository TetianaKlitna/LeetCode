/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let res = '';
  let stars = 0;
  const arr = s.split('');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === '*') stars++;
    else if (stars > 0) stars--;
    else res = arr[i] + res;
  }
  return res;
};
