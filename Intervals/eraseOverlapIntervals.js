class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number}
   */
  eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let start, end;
    let prevEnd = intervals[0][1];
    let res = 0;
    for (let i = 1; i < intervals.length; i++) {
      start = intervals[i][0];
      end = intervals[i][1];
      if (start < prevEnd) {
        res++;
        prevEnd = Math.min(end, prevEnd);
      } else {
        prevEnd = end;
      }
    }

    return res;
  }
}
