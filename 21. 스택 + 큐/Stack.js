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
    return this;
  }

  pop() {
    if (this.first === null) return null;

    const temp = this.first;
    if (this.first === this.last) {
      this.first = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

const stack = new Stack();
stack.push("1");
stack.push("2");
stack.push("3");
