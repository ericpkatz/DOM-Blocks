// **********************
//DEMO forEach 
// **********************
// **********************
// Learning Objectives
//  - iterating with forEach
// **********************

/*
const arr = [1, 2, 3, 4, 5, 7];
arr.forEach( i => {
  console.log(i);
});
*/

// **********************
//DEMO forEach with index 
// **********************
// **********************
// Learning Objectives
//  - forEach callback parameters 
// **********************

/*
const arr = [1, 2, 3, 4, 5, 7];
arr.forEach( (i, idx) => {
  console.log(i, idx);
});
*/

// **********************
//DEMO forEach returns nothing 
// **********************
// **********************
// Learning Objectives
//  - forEach returns nothing
// **********************

/*
const arr = [1, 2, 3, 4, 5, 7];
const x = arr.forEach( (i, idx) => {
  console.log(i, idx);
});
console.log(x);
*/

// **********************
//DEMO map 
// **********************
// **********************
// Learning Objectives
//  - map returns an array 
// **********************

/*
const arr = [1, 2, 3, 4, 5, 7];
const doubled = arr.map( i => {
  return i * 2; 
});
console.log(doubled);
*/

// **********************
//DEMO filter 
// **********************
// **********************
// Learning Objectives
//  - filter returns a subset 
// **********************

/*
const arr = [1, 2, 3, 4, 5, 7];
const evens = arr.filter( i => {
  return i % 2 === 0; 
});
console.log(evens);
*/

// **********************
//DEMO reduce 
// **********************
// **********************
// Learning Objectives
//  - reduce returns whatever you want it to by iterating and accumulating 
// **********************
/*
const arr = [1, 2, 3, 4, 5, 7];
const product = arr.reduce((acc, i) => {
  acc = acc * i;
  return acc;
}, 1);
console.log(product);

const sum = arr.reduce((acc, i) => {
  acc = acc + i;
  return acc;
}, 1);
console.log(sum);

const evensOdds = arr.reduce((acc, i) => {
  if(i % 2 === 1){
    acc.odds.push(i);
  }
  else {
    acc.evens.push(i);
  }
  return acc;
}, { evens: [], odds: []});
console.log(evensOdds);
*/

// **********************
//DEMO slice 
// **********************
// **********************
// Learning Objectives
//  - slice returns a new array based on indexes 
// **********************
/*
const arr = [1, 2, 3, 4, 5, 7];

const firstAndSecond = arr.slice(0, 2);
console.log(firstAndSecond);
const thirdAndFourth = arr.slice(2, 4);
console.log(thirdAndFourth);

const fourthToEnd = arr.slice(3);
console.log(fourthToEnd);
*/

