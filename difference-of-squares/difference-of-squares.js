export class Squares {
  constructor(number) {
    this.number = number;
    this.squareOfSum = this.squareSum();
    this.sumOfSquares = this.sumSquares();
    this.difference = this.squareOfSum - this.sumOfSquares;
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
