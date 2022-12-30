function factorial(num) {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

factorial(4);

/**
 * 재귀 호출로 팩토리얼 구현하기
 */
