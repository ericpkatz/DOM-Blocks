// **********************
//DEMO objects are like arrays but instead of indexes we have keys
// **********************
// **********************
// Learning Objectives
//  - object literals 
//  - keys and values
//  - getting values
// **********************

/*
const obj = {
  foo: 'bar',
  bazz: 42
};
console.log(obj['foo']);
console.log(obj.foo);
console.log(obj['bazz']);
console.log(obj.bazz);
let key = 'foo';
console.log(obj[key]);
key = 'bazz';
console.log(obj[key]);
key = 'quq';
console.log(obj[key]);
*/

// **********************
//DEMO objects can be looped over with a for in loop 
// **********************
// **********************
// Learning Objectives
//  - for in loop 
//  - setting values
// **********************
/*
const obj = {
  foo: 'bar'
};
for(let key in obj){
  console.log(key);
}
obj.bazz = 42;
for(let key in obj){
  console.log(key);
}
*/

// **********************
//DEMO objects can be passed to functions 
// **********************
// **********************
// Learning Objectives
//  - parameters (passing objects) 
// **********************
/*
function loopOverObject(obj){
  for(let key in obj){
          console.log(`key: ${key} value: ${obj[key]}`);
  }
}

const obj = {
  foo: 'bar'
};
loopOverObject(obj);
obj.bazz = 42;
loopOverObject(obj);
*/

// **********************
//DEMO objects can be returned from functions 
// **********************
// **********************
// Learning Objectives
//  - return (objects from functions) 
// **********************

/*
function createSimpleObject(key, value){
  return { key, value };
}

const obj = createSimpleObject('foo', 42);
console.log(obj);
*/

// **********************
//DEMO objects can be modified by functions 
// **********************
// **********************
// Learning Objectives
//  - parameters (modify an object) 
// **********************

/*
function addRandomValue(obj, key){
  obj[key] = Math.random();
}

const obj = { foo: 'bar'};
addRandomValue(obj, 'quq');
console.log(obj);
*/

// **********************
//DEMO Object has methods to get keys, values, and both 
// **********************
// **********************
// Learning Objectives
//  - Object methods (keys, values, entries)  
// **********************
/*
const obj = { foo: 'bar', bazz: 42, quq: true };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
*/

// **********************
//DEMO the values of objects can be arrays 
// **********************
// **********************
// Learning Objectives
//  - composition (values can be arrays) 
// **********************

/*
const arr = [1, 2, 3, 4, 5, 6];

const oddsEvens = {
odds: [],
evens: []
};

for(let i = 0; i < arr.length; i++){
if(arr[i] % 2 === 1){
  oddsEvens.odds.push(arr[i]);
}
else {
  oddsEvens.evens.push(arr[i]);
}
}
console.log(oddsEvens);
*/

// **********************
//DEMO An array can have objects as elements 
// **********************
// **********************
// Learning Objectives
//  - composition (array of objects)
// **********************

/*
function findById(arr, id){
for(let i = 0; i < arr.length; i++){
  const item = arr[i];
  if(item.id === id){
    return item;
  }
}
}

const group1 = [
{ id: 1, name: 'moe' },
{ id: 2, name: 'larry' },
{ id: 3, name: 'lucy' },
];

const group2 = [
{ id: 1, name: 'cindy' },
{ id: 2, name: 'bobby' },
{ id: 3, name: 'peter' },
];

const lucy = findById(group1, 3);
console.log(lucy);
const cindy = findById(group2, 1);
console.log(cindy);
const nobody = findById(group2, 99);
console.log(nobody);
*/

// **********************
//DEMO we can copy objects or assign an object to another variable 
// **********************
// **********************
// Learning Objectives
//  - copy (copying an object) 
//  - === (object equality)
// **********************
/*
const obj = { foo: 'bar', bazz: 'quq' };
const copy = {...obj };
copy.foo = 42;
console.log(obj);
console.log(copy);
console.log(obj === copy);

const x = obj; 
console.log(x === obj);
*/

// **********************
//DEMO we can find out if an object has the same keys and values of another object 
// **********************
// **********************
// Learning Objectives
//  - return (exit a function early) 
// **********************
/*
function isMatch(target, matcher){
  for(let key in matcher){
    if(target[key] !== matcher[key]){
      return false;
    }
  }
  return true;
}

const obj = { foo: 'bar', bar: 42, bazz: true };
let match = isMatch(obj, { bar: 42, bazz: true });
console.log(match);
match = isMatch(obj, { bar: 42, bazz: true, q: 'x' });
console.log(match);
*/
