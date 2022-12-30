function countDown(num) {
  if (num <= 0) {
    console.log("끝");
    return;
  }

  console.log(num);
  return countDown(num - 1);
}

countDown(5);

/**
 * 재귀 호출로 num부터 0까지 1씩 뺀 값을 출력하고 마지막에 “끝”을 출력
 */
