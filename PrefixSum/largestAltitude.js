/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let currPoint = 0;
  let highestAltitude = 0;
  //console.log(currPoint);
  for (let i = 0; i < gain.length; i++) {
    highestAltitude = Math.max(highestAltitude, currPoint + gain[i]);
    currPoint = currPoint + gain[i];
    //console.log(currPoint);
  }
  return highestAltitude;
};
