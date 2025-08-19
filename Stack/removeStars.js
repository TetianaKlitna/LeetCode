/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const res = [];
  for (let i = s.length - 1; i >= 0; i--) {
    let stars = 0;
    if (s[i] !== '*') {
      res.push(s[i]);
    } else {
      stars++;
      while (stars > 0) {
        i--;
        if (s[i] !== '*') stars--;
        else stars++;
      }
    }
  }

  return res.reverse().join('');
};
