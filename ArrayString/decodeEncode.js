class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encoded = '';
    for (let i = 0; i < strs.length; i++) {
      const len = strs[i].length;
      encoded += len + '#' + strs[i];
    }
    return encoded;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const res = [];

    for (let i = 0; i < str.length; i++) {
      let strLen = '';
      while (str[i] !== '#') {
        strLen += str[i];
        i++;
      }

      if (i >= str.length) break;

      //skip #
      i++;

      const len = Number(strLen);
      const word = str.slice(i, i + len);
      res.push(word);
      i += len - 1;
    }
    return res;
  }
}
