export default function BasicEs5(value) {
  this.value = value;

  BasicEs5.prototype.plus = function(...str) {
    this.value = this.value.concat(...str); 
  }


  BasicEs5.prototype.minus = function(n) {
    this.value = this.value.slice(0, this.value.length - n);
    return this;
  }

  BasicEs5.prototype.multiply = function(int) {
    let count = int;
    let arr = [];
    while(count > 0) {
      arr.push(this.value);
      count--;
    }
    
    this.value = arr.join('');
    return this;
  }
  

  BasicEs5.prototype.divide = function(n) {
    let k = Math.floor(this.value.length / n);
    this.value = this.value.slice(0, k);
    return this;
  }

  
  BasicEs5.prototype.remove = function(str) {
      let inputString = this.value;
      let result = [...inputString].filter(function(e) {
        return e !== str;
      })

      this.value = result.join('');
      return this;
  }

  
  BasicEs5.prototype.sub = function(from, to) {
    this.value = this.value.substr(from, to);
    return this;
  }

  BasicEs5.prototype.get = function () {
    return this.value;
  }
}

