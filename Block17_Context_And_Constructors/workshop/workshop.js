class Numbers{
  constructor(data){
    if(typeof data === 'string'){
      this.data = str.split(',').map(number => number*1);
    }
    else {
      this.data = data;
    }
  }
  count(){
    return this.data.length;
  }
  printNumbers(){
    this.data.forEach( (number, idx) => {
      console.log(`number at ${idx} is ${number}`);
    });
  }
  odds(){
    return this.data.filter(number => number % 2 === 1);

  }
  evens(){
    return this.data.filter(number => number % 2 === 0);
  }
  sum(){
    return this.data.reduce((acc, number)=> {
      return acc + number;
    }, 0);
  }
  product(){
    return this.data.reduce((acc, number)=> {
      return acc * number;
    }, 1);
  }
  greaterThan(target){
    return this.data.filter(number => number > target);
  }
  howMany(target){
    return this.data.filter(number => number === target).length;
  }
}

const str = window.prompt('enter some numbers, like this', '1,2,3,3,5,9');

const n1 = new Numbers(str);
console.log(n1.count());
n1.printNumbers();
console.log(n1.odds());
console.log(n1.evens());
console.log(n1.sum());
console.log(n1.product());
console.log(n1.greaterThan(3));
console.log(n1.howMany(3));

