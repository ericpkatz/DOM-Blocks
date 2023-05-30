# questions

- Create two files named yards_meters.html and yards_meters.js and connect them using a script tag

```html
<html>
  <head>
    <script src='guided_practice_yards_meters.js'></script>
  </head>
  <body>
  </body>
</html>
```

- Prompt the user to enter a number and store it in the variable inputYards
  
```js
let inputYards = prompt('Enter a number, we will convert that number from yards to meters');
```

- Define the convertToMeters function that takes in yards as a parameter and converts it to meters (multiplies the yards by .9144)

```js
function convertToMeters(yards){
  return yards * 0.9144;
}
```

- Convert the yards value that was input to meters using the convertToMeters() function

```js
let convertedMeters = convertToMeters(inputYards);
```

- Define the createMessage function that takes in yards and meters and returns a message based on the following. (Don't forget to convert the strings to numbers when necessary)
  - Should always contain the following `${yards} yards is ${meters} meters.`
  - If the yards are equal to 1760, the message should add `That's as long as a mile!` to the end
  - If the yards are equal to 100, the message should add `That's as long as a football field!` to the end
  - If the yards are equal to 26, the message should add `That's as long as a tennis court!` to the end
  - If the yards are equal to 1, the message should add `That's as long as a washing machine!` to the end

```js
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
let output = createMessage(inputYards, convertedMeters);
```

- Log the output to the console

```js
console.log(output);
```

- Prompt the user to enter a new number and perform the conversion and message creation again

```js
inputYards = prompt('Let\'s try again! Enter a number, we will convert that number from yards to meters');
convertedMeters = convertToMeters(inputYards);
output = createMessage(inputYards, convertedMeters);
console.log(output);
```

- Define the rand function that takes in a limit and generates a random whole number between 0 and the limit

```js
function rand(limit){
  return Math.round(Math.random() * limit);
}
```

- Generate a random yards value between 0 and 100, convert it to meters, create a message, and log the output

```js
let randomYards = rand(100); 
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);
```

Repeat the previous step multiple times to print out multiple random conversions

```js
randomYards = rand(100); 
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);
```
