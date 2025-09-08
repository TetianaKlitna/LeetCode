class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const map = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      if (Object.values(map).includes(s[i])) {
        const popped = stack.pop();
        if (map[popped] !== s[i]) return false;
      } else stack.push(s[i]);
    }

    return stack.length === 0 ? true : false;
  }
}
