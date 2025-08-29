/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const r = [];
  const d = [];
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') r.push(i);
    else d.push(i);
  }
  let i = 0;
  const offset = senate.length;
  while (r.length > 0 && d.length > 0) {
    if (r[i] < d[i]) {
      r.push(r[i] + offset);
    } else {
      d.push(d[i] + offset);
    }

    d.shift();
    r.shift();
  }

  if (d.length > 0) return 'Dire';

  return 'Radiant';
};
