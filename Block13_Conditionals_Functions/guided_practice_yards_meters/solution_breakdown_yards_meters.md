# questions

- Create two files named yards_meters.html and yards_meters.js and connect them using a script tag

```html
<!-- add the following code in the yards_meters.html -->
<html>
  <head>
    <script src='yards_meters.js'></script>
  </head>
  <body>
  </body>
</html>
```

- Prompt the user to enter a number and store it in the variable inputYards
  
```js
// add the following code into the yards_meters.js file
let inputYards = prompt('Enter a number, we will convert that number from yards to meters');
```

- Define the convertToMeters function that takes in yards as a parameter and converts it to meters (multiplies the yards by .9144)

```js
// add the following code to the top of the yards_meters.js
function convertToMeters(yards){
  return yards * 0.9144;
}
```

- Convert the yards value that was input to meters using the convertToMeters() function

```js
// add the following code below the inputYards declaration
let convertedMeters = convertToMeters(inputYards);
```

- Define the createMessage function that takes in yards and meters and returns a message based on the following. (Don't forget to convert the strings to numbers when necessary)
  - Should always contain the following `${yards} yards is ${meters} meters.`
  - If the yards are equal to 1760, the message should add `That's as long as a mile!` to the end
  - If the yards are equal to 100, the message should add `That's as long as a football field!` to the end
  - If the yards are equal to 26, the message should add `That's as long as a tennis court!` to the end
  - If the yards are equal to 1, the message should add `That's as long as a washing machine!` to the end

```js
// add the following function below the convertToMeters function declaration
function createMessage(yards, meters){
  let message = '';
  const numYards = yards * 1;
  
  if(numYards === 1760) {
    message = `That's as long as a mile!`
  } else if(numYards === 100) {
    message = `That's as long as a football field!`;
  } else if(numYards === 26) {
    message = `That's as long as a tennis court!`;
  } else if(numYards === 1) {
    message = `That's as long as a washing machine!`;
  }

  return `${yards} yards is ${meters} meters. ${message}`;
}
```

- Create a message for the user using the createMessage function

```js
// add the following code below the convertedMeters declaration
let output = createMessage(inputYards, convertedMeters);
```

- Log the output to the console

```js
// add the following code below the output declaration
console.log(output);
```

- Prompt the user to enter a new number and perform the conversion and message creation again

```js
// add the following code below the console.log(output);
inputYards = prompt('Let\'s try again! Enter a number, we will convert that number from yards to meters');
convertedMeters = convertToMeters(inputYards);
output = createMessage(inputYards, convertedMeters);
console.log(output);
```

- Define the rand function that takes in a limit and generates a random whole number between 0 and the limit

```js
// add the following function below the createMessage function declaration
function rand(limit){
  return Math.round(Math.random() * limit);
}
```

- Generate a random yards value between 0 and 100, convert it to meters, create a message, and log the output

```js
// add the following code to the bottom of the yards_meters.js file
let randomYards = rand(100); 
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);
```

Repeat the previous step multiple times to print out multiple random conversions

```js
// add the following code to the bottom of the yards_meters.js file again
randomYards = rand(100); 
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);
```
