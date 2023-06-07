// **********************
//DEMO objects can have functions (methods) 
// **********************
// **********************
// Learning Objectives
//  - methods (functions for object values)
// **********************

/*
const obj = {
  foo: 'bar',
  bazz: ()=> {
    console.log(42);
  }
}

obj.bazz();
*/

// **********************
//DEMO using this 
// **********************
// **********************
// Learning Objectives
//  - this (choice between function and arrow syntax matters)
// **********************

/*
const obj = {
  foo: 'bar',
  bazz: ()=> {
    console.log(this.foo);
  }
}

obj.bazz();

const obj2 = {
  foo: 'bar',
  bazz: function(){
    console.log(this.foo);
  }
}

obj2.bazz();
*/

// **********************
//DEMO losing this 
// **********************
// **********************
// Learning Objectives
//  - functions can lose context 
// **********************

/*
const obj = {
  foo: 'bar',
  bazz: function(){
    console.log(this.foo);
  }
}

const fn = obj.bazz;
fn();
*/

// **********************
//DEMO classes and instances 
// **********************
// **********************
// Learning Objectives
//  - Date is a class
//  - new Dates(s) can be constructed
//  - new Dates(s) are instances of the Date class
// **********************

/*
const d = new Date();
console.log(d);
console.log(typeof d);
console.log(d.toLocaleString());
console.log(d.getHours());
d.setHours(d.getHours() + 1);
console.log(d);
*/

// **********************
//DEMO a simple class 
// **********************
// **********************
// Learning Objectives
//  - class 
// **********************

/*
class Foo{
  constructor(bar){
    this.bar = bar;
  }
}

const f1 = new Foo(42);
console.log(f1);

const f2 = new Foo('bazz');
console.log(f2);
console.log(f1 === f2);
*/

// **********************
//DEMO class methods 
// **********************
// **********************
// Learning Objectives
//  - class methods 
// **********************

/*
class Foo{
  constructor(bar){
    this.bar = bar;
  }
  sayHi(){
    console.log(`hello my bar value is ${this.bar}`);
  }
}

const f1 = new Foo(42);
f1.sayHi();

const f2 = new Foo('bazz');
f2.sayHi();
*/
