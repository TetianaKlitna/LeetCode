/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const keys = new Set();

  const dfs = (currRoom, currKeys) => {
    if (visited.has(currRoom)) return;

    visited.add(currRoom);
    for (let key of rooms[currRoom]) {
      currKeys.add(key);
    }

    for (let key of rooms[currRoom]) dfs(key, currKeys);
  };

  dfs(0, keys);

  return visited.size === rooms.length;
};
