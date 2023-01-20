class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy); // hypot : 피타고라스의 정리에서 삼각형 빗변의 길이를 반환
  }
}
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
Point.distance(p1, p2); // 7.0710678118654755
