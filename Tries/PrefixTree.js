class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class PrefixTree {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!curr.children[word[i]]) {
        curr.children[word[i]] = new TrieNode();
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
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      if (curr.children[word[i]]) {
        curr = curr.children[word[i]];
      } else {
        return false;
      }
    }
    if (curr.isEnd) return true;

    return false;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (curr.children[prefix[i]]) {
        curr = curr.children[prefix[i]];
      } else {
        return false;
      }
    }

    return true;
  }
}
