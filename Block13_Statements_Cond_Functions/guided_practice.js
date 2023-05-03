function rand(limit){
  return Math.round(Math.random()*limit);
}

function convertToMeters(yards){
  return yards * 0.94144;
}

function createMessage(yards, meters){
        return `${yards} yards is ${ meters} meters.`;
      };

let yards = prompt('enter a number, we will convert that number from yards to meters');
let meters = convertToMeters(yards);
let output = createMessage(yards, meters);
console.log(output);

yards = prompt('Lets try again! enter a number, we will convert that number from yards to meters');
meters = convertToMeters(yards);
output = createMessage(yards, meters);
console.log(output);

yards = rand(100); 
meters = convertToMeters(yards);
output = createMessage(yards, meters);
console.log(output);

yards = rand(100); 
meters = convertToMeters(yards);
output = createMessage(yards, meters);
console.log(output);
