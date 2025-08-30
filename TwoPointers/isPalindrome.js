class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let start = 0;
    let end = s.length - 1;

    const isValid = (ch) => {
      return (
        ('0' <= ch && ch <= '9') ||
        ('a' <= ch && ch <= 'z') ||
        ('A' <= ch && ch <= 'Z')
      );
    };

    while (start < end) {
      while (!isValid(s[start]) && start < end) start++;
      while (!isValid(s[end]) && start < end) end--;
      if (s[start].toLowerCase() !== s[end].toLowerCase()) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
}
