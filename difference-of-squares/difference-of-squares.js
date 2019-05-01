export class Squares {
  constructor(number) {
    this.number = number;
    this.squareOfSum = this.squareSum();
    this.sumOfSquares = this.sumSquares();
    this.diffrence = this.diffrence(
      this.squareSum(number),
      this.sumSquares(number)
    );
  }

  diffrence(first, second) {
    let one = first;
    let two = second;
    return one - two;
  }

  squareSum() {
    let result = 0;
    for (let i = 0; i <= this.number; i++) {
      result += i;
    }
    return result ** 2;
  }

  sumSquares() {
    let result = 0;
    for (let i = 0; i <= this.number; i++) {
      result += i ** 2;
    }
    return result;
  }
}
