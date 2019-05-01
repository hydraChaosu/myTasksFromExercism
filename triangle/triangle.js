export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  kind() {
    if ([this.a, this.b, this.c].includes(0)) {
      throw new Error("triagles cant have 0");
    }

    if (this.a < 0 || this.b < 0 || this.c < 0) {
      throw new Error("triagles cant be lower 0");
    }

    if (
      this.a + this.b < this.c ||
      this.a + this.c < this.b ||
      this.c + this.b < this.a
    ) {
      throw new Error("is not a triangle");
    }

    if (this.a === this.b && this.c === this.b) {
      return "equilateral";
    }

    if (
      (this.a === this.b && this.b !== this.c) ||
      (this.a === this.b && this.a !== this.c) ||
      (this.a === this.c && this.a !== this.b) ||
      (this.b === this.c && this.b !== this.a)
    ) {
      return "isosceles";
    }

    if (this.a !== this.b && this.a !== this.c && this.b !== this.c) {
      return "scalene";
    }
  }
}
