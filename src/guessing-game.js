class GuessingGame {
  constructor() {
    this.i = 0;
    this.mid = 0;
    this.j = 0;
  }

  setRange(min, max) {
    this.i = min;
    this.j = max;
  }

  guess() {
    this.mid = this.i + Math.ceil((this.j - this.i) / 2);
    return this.mid;
  }

  lower() {
    this.j = this.mid;
  }

  greater() {
    this.i = this.mid;
  }
}

module.exports = GuessingGame;
