class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies++;
    if (this.tardies >= 3) return "You are expelled!!";
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    const sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}

const firstStudent = new Student("짱구", "신");
firstStudent.fullName(); // Your full name is Cliff Hudson
firstStudent.markLate(); // 'Cliff Hudson has been late 1 times'
firstStudent.markLate(); // 'Cliff Hudson has been late 2 times'
firstStudent.markLate(); // ''You are expelled!!''
firstStudent.addScore(65);
console.log(firstStudent.scores); // [65]
firstStudent.addScore(95); // [65, 95]
firstStudent.calculateAverage(); // 80
