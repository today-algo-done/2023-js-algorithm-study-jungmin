function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(4);

/**
 * 재귀 호출로 num ~ 1 까지 더하기
 */
