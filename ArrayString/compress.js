/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    
  let write = 0;
  let startGroup = 0;

  for (let read = 1; read <= chars.length; read++) {
    if (chars[read - 1] !== chars[read]) {
      const cnt = String(read - startGroup);
      chars[write++] = chars[startGroup];
      if (cnt > 1) {
        for (let i = 0; i < cnt.length; i++) {
          chars[write++] = cnt[i];
        }
      }
      startGroup = read;
    }
  }
  return write;
};
