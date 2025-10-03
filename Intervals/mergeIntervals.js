class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let start, end, lastEnd;
    const res = [];
    res.push(intervals[0]);
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
