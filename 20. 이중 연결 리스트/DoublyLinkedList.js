class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    const shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    this.length--;
    return shiftedNode;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || this.length <= index) return null;
    let current;
    let count;

    if (this.length / 2 >= index) {
      current = this.head;
      count = 0;
      while (index !== count) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (index !== count) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, value) {
    if (!this.get(index)) return false;

    const current = this.get(index);
    current.val = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || this.length < index) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    newNode.next = afterNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || this.length < index) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length) return !!this.pop();

    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    this.length--;
    return true;
  }
}

const list = new DoublyLinkedList();
list.push("❤");
list.push("💤");
list.push("💨");
list.push("😉");
list.push("😈");
list.push("🦅");
list.push("🦷");
