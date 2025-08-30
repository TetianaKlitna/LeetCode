/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const len = isConnected.length;
  const visited = new Array(len).fill(false);

  const dfs = (node) => {
    visited[node] = true;
    for (let j = 0; j < len; j++) {
      if (isConnected[node][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  };

  let res = 0;
  for (let i = 0; i < len; i++) {
    if (!visited[i]) {
      dfs(i);
      res++;
    }
  }

  return res;
};
