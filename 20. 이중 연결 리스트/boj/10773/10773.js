const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const K = +input.shift();

const fees = input.map(v => +v);
const feeSum = [];

for (let i = 0; i < K; i++) {
  fees[i] === 0 ? feeSum.splice(feeSum.length - 1, 1) : feeSum.push(fees[i]);
}

let sum = 0;

for (let i = 0; i < feeSum.length; i++) {
  sum += feeSum[i];
}

console.log(sum);
