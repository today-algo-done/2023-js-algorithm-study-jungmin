class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;

    for (const char of word) {
      node = node[char] ? node[char] : (node[char] = {});
    }

    node.isTerminal = true;
  }

  search(word) {
    let node = this.root;

    for (const char of word) {
      node = node[char];
      if (!node) return false;
    }

    return node.isTerminal === true;
  }

  startsWith(prefix) {
    let node = this.root;

    for (const char of prefix) {
      node = node[char];
      if (!node) return false;
    }

    return true;
  }
}

const trie = new Trie();

trie.insert("apple");
trie.search("apple"); // returns true
trie.search("app"); // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app"); // returns true
