/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      stack.push(s[i]);
      continue;
    }

    let curr = '';
    while (stack[stack.length - 1] !== '[') {
      const poped = stack.pop();
      curr = poped + curr;
    }

    stack.pop();
    let k = '';
    while ('0' <= stack[stack.length - 1] && stack[stack.length - 1] <= '9') {
      const poped = stack.pop();
      k = poped + k;
    }

    stack.push(curr.repeat(k));
  }

  return stack.join('');
};
