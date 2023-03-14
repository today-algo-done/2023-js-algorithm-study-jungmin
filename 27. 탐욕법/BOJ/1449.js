const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

// const [N, L] = input[0].split(" "); // N: 물이 새는 곳의 개수, L: 테이프 길이
const N = +input[0].split(" ")[0]; // 물이 새는 곳의 개수
const L = +input[0].split(" ")[1]; // 테이프 길이

const pos = input[1]
  .split(" ")
  .map(v => +v)
  .sort((a, b) => a - b);

let current = 0;
let end = 0;
let result = 0;

while (current < N) {
  if (end < pos[current]) {
    end = pos[current] + L - 0.5;
    result++;
  }
  current++;
}

console.log(result);
