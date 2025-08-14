/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let i = 0;
  while (n > 0 && i < flowerbed.length) {
    const prev = i === 0 || flowerbed[i - 1] === 0;
    const next = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
    if (flowerbed[i] === 0 && prev && next) {
      flowerbed[i] = 1;
      n--;
    }
    i++;
  }
  return n === 0;
};
