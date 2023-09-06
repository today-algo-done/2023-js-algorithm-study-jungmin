/**
 * @param {string} s
 * @return {boolean}
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size++;
  }

  pop() {
    if (this.first === null) return undefined;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
  }
}

const isValid = function (s) {
  const stack = new Stack();

  if (s.length === 1) return false;

  for (let i = 0; i < s.length; i++) {
    if (stack.size === 0 && (s[i] === ")" || s[i] === "}" || s[i] === "]"))
      return false;

    stack.push(s[i]);

    if (
      (stack.first.val === ")" && stack.first.next.val === "(") ||
      (stack.first.val === "}" && stack.first.next.val === "{") ||
      (stack.first.val === "]" && stack.first.next.val === "[")
    ) {
      stack.pop();
      stack.pop();
    }
  }

  return !stack.size;
};
