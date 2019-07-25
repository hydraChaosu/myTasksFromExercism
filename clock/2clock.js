class at {
  constructor(hour = 0, minutes = 0) {
    this.starthour = hour;
    this.startminutes = minutes;
    this.hour = hour;
    this.minutes = minutes;
  }

  setHour() {
    if (this.hour < 0) {
      this.hour = (24 + this.hour) % 24;
    } else {
      this.hour = this.hour % 24;
    }
  }
  setMinutes() {
    if (this.startminutes >= 0) {
      this.minutes = this.minutes % 60;
      // if (minutes >= 60) {
      this.hour = this.hour + Math.floor(this.startminutes / 60);
      this.hour = this.hour % 24;
      // }
    } else {
      this.minutes = this.minutes % 60;
      this.minutes = 60 + this.minutes;
      this.hour = (this.hour + Math.floor(this.startminutes / 60)) % 24;
      if (this.hour < 0) {
        this.hour = 24 + this.hour;
      }
    }
  }
  getTime() {
    return `${this.hour >= 10 ? this.hour : `0${this.hour}`}:${
      this.minutes
        ? this.minutes >= 10
          ? this.minutes
          : `0${this.minutes}`
        : "00"
    }`;
  }
}

export { at };
// at(1, -160);
// at(-121, -5810);
let a = new at(-121, -5810); // 22:10
a.setHour();
a.setMinutes();
a.getTime();
console.log(a.getTime());

let b = new at(201, 3001); // 11:01
b.setHour();
b.setMinutes();
b.getTime();
console.log(b.getTime());
