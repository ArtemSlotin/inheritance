import basicEs6 from './basicEs6.js';
import basicEs5 from './basicEs5.js';

class IntBuilder extends basicEs6 {
  constructor(int) {
    super(int)
  }

  plus(...n) {
    super.plus(...n)
    this.int = n.reduce((a, b) => a + b, this.int);
    super.console(this.int)
    return this;
  }

  minus(...n) {
    super.minus(...n)
    this.int = n.reduce((a, b) => a - b, this.int);
    super.console(this.int)
    return this;
  }
  
  multiply(n) {
    super.multiply(n)
    this.int = this.int * n;
    super.console(this.int)
    return this; 
  }

  divide(n) {
    super.divide(n)
    this.int = this.int / n;
    super.console(this.int)
    return this;
  }

  mod(n) {
    super.mod(n)
    this.int = this.int % n;
    super.console(this.int)
    return this;
  }

  get() {
    super.get()
    super.console(this.int)
    return this.int;
  }

  static random(from, to) {
    let difference = to - from; 
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + from;
    console.log(rand)
    return rand;
  }
}

let resultEs6 = new IntBuilder(10)
  resultEs6
  .plus(2, 3, 4, 5)
  .minus(2, 3)
  .multiply(5)
  .divide(4)
  .mod(50)
  .get()
  IntBuilder.random(5, 10);


function StringBuilder(str) {
  basicEs5.call(this, str)
}

StringBuilder.prototype = Object.create(basicEs5.prototype);
StringBuilder.prototype.constructor = StringBuilder;



let stringBuilder = new StringBuilder('Hello')
  stringBuilder
  .plus(' all', '!')
  .minus(4)
  .multiply(3)
  .divide(4)
  .remove('l')
  .sub(1, 1)
  .get();

  console.log(stringBuilder);