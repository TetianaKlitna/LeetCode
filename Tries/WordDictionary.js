class Node {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new Node();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!curr.children[word[i]]) {
        curr.children[word[i]] = new Node();
      }
      curr = curr.children[word[i]];
    }
    curr.isEnd = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const dfs = (node, searchWord) => {
      let curr = node;

      for (let i = 0; i < searchWord.length; i++) {
        if (curr.children[searchWord[i]]) {
          curr = curr.children[searchWord[i]];
        } else if (searchWord[i] === '.') {
          for (const key in curr.children) {
            const child = curr.children[key];
            if (child !== null && dfs(child, searchWord.slice(i + 1)))
              return true;
          }
          return false;
        } else {
          return false;
        }
      }

      return curr.isEnd;
    };

    return dfs(this.root, word);
  }
}
