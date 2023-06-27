# WIIFM
Developers often use classes in order to make their code more manageable.

# Overview
Demo will use the prompt object to to get a string from the user. The string will be used to create a Sentence instance which will have methods added to it. The workshop minimal starter code and have them add methods to a class.



# Learning Objectives
- uses of the word this
- understanding context
- creating classes which can be used to create objects


# Slide Deck should include
- what is this?
- what does this point to when an object has a function, using function keyword
- what does this point to when an object has aa function, using the arrow syntax
- how a class uses this
- creating a class
- creating instances from a class

# Workshop Starter Code

```
class Numbers{
  constructor(data){
    if(typeof data === 'string'){
      this.data = str.split(',').map(number => number*1);
    }
    else {
      this.data = data;
    }
  }
}
const str = window.prompt('enter some numbers, like this', '1,2,3,3,5,9');

const n1 = new Numbers(str);
//console.log(n1.count());//returns count of numbers
//n1.printNumbers();//prints the number along with their indexes
//console.log(n1.odds());//returns odd numbers
//console.log(n1.evens());//returns even numbers
//console.log(n1.sum());//returns sum of numbers
//console.log(n1.product());//returns product of numbers
//console.log(n1.greaterThan(3));//returns numbers greater than another number
//console.log(n1.howMany(3));//return the count of a specific number
```

# Utilizes

