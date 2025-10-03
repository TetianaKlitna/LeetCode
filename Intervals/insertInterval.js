class Solution {
  /**
   * @param {number[][]} intervals
   * @param {number[]} newInterval
   * @return {number[][]}
   */
  insert(intervals, newInterval) {
    let res = [];
    if (intervals.length === 0) {
      res.push(newInterval);
      return res;
    }
    let start, end;

    if (intervals[intervals.length - 1][0] <= newInterval[0]) {
      intervals.push(newInterval);
    } else {
      for (let i = 0; i < intervals.length; i++) {
        let start = intervals[i][0];
        if (start > newInterval[0]) {
          intervals.splice(i, 0, newInterval);
          break;
        }
      }
    }

    res.push(intervals[0]);
    let lastEnd;

    for (let i = 1; i < intervals.length; i++) {
      start = intervals[i][0];
      end = intervals[i][1];
      lastEnd = res[res.length - 1][1];
      if (start <= lastEnd) {
        res[res.length - 1][1] = Math.max(end, lastEnd);
      } else {
        res.push([start, end]);
      }
    }

    return res;
  }
}
