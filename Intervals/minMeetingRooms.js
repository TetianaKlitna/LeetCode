/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {number}
   */
  minMeetingRooms(intervals) {
    const starts = intervals.map((item) => item.start).sort((a, b) => a - b);
    const ends = intervals.map((item) => item.end).sort((a, b) => a - b);
    let cnt = 0;
    let res = 0;
    let i = 0,
      j = 0;
    while (i < intervals.length) {
      if (starts[i] < ends[j]) {
        cnt++;
        i++;
      } else {
        cnt--;
        j++;
      }
      res = Math.max(cnt, res);
    }

    return res;
  }
}
