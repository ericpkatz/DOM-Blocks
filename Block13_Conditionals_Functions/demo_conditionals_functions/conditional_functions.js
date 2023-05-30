// ****************
// DEMO a statement
// ****************
// ****************
// Learning Objectives 
//    - statements (building blocks) 
// ****************

/*
console.log('hello');
*/


// ****************
// DEMO A conditional statement
// ****************
// ****************
// Learning Objectives 
//    - conditionals (allow branching of logic) 
// ****************
/*
const foo = 'bar';
if(foo === 'bar'){
  console.log('of course it does');
}
*/


// ****************
// DEMO A function contains statements 
// ****************
// ****************
// Learning Objectives 
//    - functions (allow reusability of groups of statements) 
//    - arrow syntax or function keyword (for now does not matter)
// ****************
/*
function aFunction(){
  console.log('hello');
}
aFunction();
aFunction();
*/


// ****************
// DEMO a function can return values; 
// ****************
// ****************
// Learning Objectives 
//    - return (allows returning from block of code) 
//    - value after returned is what is returned
// ****************
/*
function aFunction(){
  const foo = 'bar';
  return foo;
}
console.log(aFunction());
*/


// ****************
// DEMO a function can accept values 
// ****************
// ****************
// Learning Objectives 
//    - parameters (values passed to functions) 
// ****************
/*
function aFunction(b){
  console.log(b);
}
aFunction('bar');
*/

// ****************
// DEMO a function can accept values and return values 
// ****************
// ****************
// Learning Objectives 
//    - multiple parameters (separated by commas)
// ****************
/*
function addition(a, b){
  return a + b;
}
const sum = addition(3, 4);
console.log(sum);
*/

// ****************
// DEMO the prompt function lets us get a value 
// ****************
// ****************
// Learning Objectives 
//    - user input (numeric data is still a string) 
//    - typeof operator 
// ****************

/*
const value = prompt('enter a value');
console.log(typeof value);
console.log(value);
*/

// ****************
// DEMO get a value from the user (it will be a string) and call a function
// ****************
// ****************
// Learning Objectives 
//    - *1 create number from a string 
// ****************

/*
function addTen(num){
  return num + 10;
}
const value = prompt('enter a number');
console.log(typeof value);

console.log(addTen(value * 1));
*/

// ****************
// DEMO generate a random number between 1 and 3
// ****************
// ****************
// Learning Objectives 
//    - Math object (has methods random and ceil) 
// ****************

/*
function rnd(){
  let x = Math.random()*3;
  x = Math.ceil(x);
  return x;
}
console.log(rnd());
*/

// ****************
//DEMO generate a random number between 1 and another value 
// ****************
/*
function rnd(limit){
  let x = Math.random()*limit;
  x = Math.ceil(x);
  return x;
}
console.log(rnd(10));
console.log(rnd(100));
*/

// ****************
//DEMO generate a random number between 1 and another value from the user (always a string)
// ****************
/*
function rnd(limit){
  let x = Math.random()*limit;
  x = Math.ceil(x);
  return x;
}
const limit = prompt('enter a number');
console.log(rnd(limit*1));
*/

// ****************
//DEMO create the headsTails function 
// ****************
/*
function headsTails(){
  const x = Math.round(Math.random());
  if(x === 0){
    return 'heads';
  }
  else {
    return 'tails';
  }
}
console.log(headsTails());
*/

// ****************
//DEMO headsTails with a user guess 
// ****************
/*
function headsTails(){
  const x = Math.round(Math.random());
  if(x === 0){
    return 'heads';
  }
  else {
    return 'tails';
  }
}
const guess = prompt('guess heads or tails');
const result = headsTails();
if(guess === result){
  console.log('correct');
}
else {
  console.log(`nope it was ${result}`);
}
*/

// ****************
//DEMO connect with dashes
// ****************
// ****************
// Learning Objectives 
//    - Template literals (formatting of strings) 
// ****************
/*
function connectWithDashes(str){
  return `${str}-${str}`;
}
const str = connectWithDashes('hello');
console.log(str);
*/

// ****************
//DEMO get value from the user to connect with dashes 
// ****************
/*
function connectWithDashes(str){
  return `${str}-${str}`;
}

const value = prompt('give me a value, I will connect it with dashes');
const str = connectWithDashes(value);
console.log(str);
*/
