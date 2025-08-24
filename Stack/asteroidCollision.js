/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const res = [];

  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      res.push(asteroids[i]);
      continue;
    }

    if (asteroids[i] < 0 && (res.length === 0 || res[res.length - 1] < 0)) {
      res.push(asteroids[i]);
      continue;
    }

    while (res.length && res[res.length - 1] > 0) {
      const curr = res[res.length - 1];
      if (-asteroids[i] < curr) {
        break;
      } else if (-asteroids[i] > curr) {
        res.pop();
        if (res.length === 0 || res[res.length - 1] < 0) res.push(asteroids[i]);
      } else if (-asteroids[i] === curr) {
        res.pop();
        break;
      }
    }
  }

  return res;
};
