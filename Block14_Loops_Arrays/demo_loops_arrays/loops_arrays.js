// **********************
// DEMO - an array is a collection of values which can be accessed by index
// **********************
// **********************
// Learning Objectives
//  - array literals []
//  - index (can be used to access values)
// **********************
/*
const arr = [1, 2, 3];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);
*/

// **********************
// DEMO - a function which tells us about an array 
// **********************
// **********************
// Learning Objectives
//  - length property 
//  - indexes (0 to length - 1)  
// **********************
/*
function arrayInfo(arr){
  console.log(`the length of your array is ${ arr.length}`);
  console.log(`the max index of your array is ${ arr.length - 1}`);
  console.log(`the last element is ${ arr[arr.length - 1]}`);
}
const arr = [1, 3, 5, 7, 9];
arrayInfo(arr);
*/

// **********************
// DEMO - we can loop over an array 
// **********************
// **********************
// Learning Objectives
//  - for loop (before loop; condition; after iteration )
// **********************

/*
const arr = [1, 3, 5, 7, 9];
for(let i = 0; i < arr.length; i++){
console.log(arr[i]);
}
*/

// **********************
// DEMO - we can add a value to the end of an array 
// **********************
// **********************
// Learning Objectives
//  - push (adding a value to the end of an array) 
// **********************
/*
const arr = [1, 3, 5, 7, 9];
arr.push(10);
for(let i = 0; i < arr.length; i++){
console.log(arr[i]);
}
*/

// **********************
// DEMO - we can generate an array 
// **********************
// **********************
// Learning Objectives
//  - populating an array with a loop 
// **********************

/*
const arr = [];
for(let i = 0; i < 25; i++){
  arr.push(i);
}
console.log(arr);
*/

// **********************
// DEMO - we can generate an array of odd numbers 
// **********************
// **********************
// Learning Objectives
//  - % operator to determine odd or even numbers 
// **********************
/*
const arr = [];
for(let i = 0; i < 25; i++){
if(i % 2 === 1){
  arr.push(i);
}
}
console.log(arr);
*/

// **********************
// DEMO - we can create a function which generates an array of odd numbers 
// **********************
// **********************
// Learning Objectives
//  - a function can return an array 
// **********************
/*
function generateArray(limit){
  const arr = [];
  for(let i = 0; i < limit; i++){
    if(i % 2 === 1){
      arr.push(i);
    }
  }
  return arr;
}

const arr = generateArray(100);
console.log(arr);
*/

// **********************
// DEMO - we can create a function which counts the odd or even numbers in an array 
// **********************
// **********************
// Learning Objectives
//  - parameters (arrays as parameters) 
// **********************

/*
function countOdds(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 1){
      count = count + 1;
    }
  }
  return count;
}

const arr = [1, 2, 3];
console.log(countOdds(arr));
console.log(countOdds([2, 4, 6]));
*/

// **********************
// DEMO - we can split a string into an array 
// **********************
// **********************
// Learning Objectives
//  - split (a string into an array) 
// **********************

/*
const str = 'foo,bar,bazz';
const letters = str.split(',');
for(let i = 0; i < letters.length; i++){
  console.log(letters[i]);
}
*/

// **********************
// DEMO - we can create a function which splits strings into arrays 
// **********************
// **********************
// Learning Objectives
//  - return an array from a function 
// **********************
/*

function splitIt(str, delim){
  return str.split(delim);
}

let str = 'foo,bar,bazz';
let words = splitIt(str, ',');
for(let i = 0; i < words.length; i++){
  console.log(words[i]);
}
str = 'fizz|buzz';
words = splitIt(str, '|');
for(let i = 0; i < words.length; i++){
  console.log(words[i]);
}
*/

// **********************
// DEMO - we can create a function which takes an array of numbers and returns a new array with only the even numbers 
// **********************
// **********************
// Learning Objectives
//  - return an array from a function 
// **********************
/*
function onlyEvens(arr){
  const results = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      results.push(arr[i]);
    }
  }
  return results;
}
const arr = [1, 2, 3, 4, 5, 6];
const evens = onlyEvens(arr);
console.log(evens);
*/

// **********************
// DEMO - elements can be removed from arrays, using shift, pop, or splice 
// **********************
// **********************
// Learning Objectives
//  - pop, shift, splice (removing elements from an array) 
// **********************

/*
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);
*/

// **********************
// DEMO - when arrays are passed to functions, they can be modified.. so be careful :) 
// **********************
// **********************
// Learning Objectives
//  - functions can modify arrays 
// **********************
/*
function modifyArr(arr){
  return arr.pop();
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
console.log(modifyArr(arr));
console.log(arr);
*/

// **********************
// DEMO - a while loop can be used to modify an array 
// **********************
// **********************
// Learning Objectives
//  - while loops (can be used to remove elements from an array) 
//  - while loops (can be used to populate an array) 
// **********************
/*
const arr = [1, 2, 3, 4, 5, 6];
while(arr.length){
  console.log(arr.pop());
}

while(arr.length < 10){
  arr.push('hello');
}
console.log(arr);
*/
