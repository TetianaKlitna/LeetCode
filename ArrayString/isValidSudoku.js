class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const len = board.length;

    const rows = Array.from({ length: len }, () => new Set());
    const cols = Array.from({ length: len }, () => new Set());
    const box = Array.from({ length: len }, () => new Set());

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        const val = board[i][j];
        if (val === '.') continue;
        const ind = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (rows[i].has(val) || cols[j].has(val) || box[ind].has(val))
          return false;
        rows[i].add(val);
        cols[j].add(val);
        box[ind].add(val);
      }
    }

    return true;
  }
}
