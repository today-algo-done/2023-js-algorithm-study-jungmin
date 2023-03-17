class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
  }

  pop() {
    if (!this.first) return -1;
    if (this.first === this.last) this.last = null;

    const temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  box() {
    return this.size;
  }

  empty() {
    return !this.size ? 1 : 0;
  }

  front() {
    return this.first ? this.first.val : -1;
  }

  back() {
    return this.last ? this.last.val : -1;
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .split("\n");

const N = input.shift(); // 명령의 수
const queue = new Queue();
let result = "";

for (let i = 0; i < N; i++) {
  switch (input[i].split(" ")[0]) {
    case "push":
      queue.push(+input[i].split(" ")[1]);
      break;
    case "pop":
      result += queue.pop() + " ";
      break;
    case "size":
      result += queue.box() + " ";
      break;
    case "empty":
      result += queue.empty() + " ";
      break;
    case "front":
      result += queue.front() + " ";
      break;
    case "back":
      result += queue.back() + " ";
      break;
    default:
      break;
  }
}

console.log(result.split(" ").join("\n"));
