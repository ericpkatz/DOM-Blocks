function rand(limit){
  return Math.round(Math.random()*limit);
}

function convertToCelcius(faren){
  return (faren - 32) * (5 / 9);
}

function createMessage(faren, celc){
        return `${faren} farenheit is ${ celc} celcius.`;
      };

let faren = prompt('enter a number, we will convert that number from farenheit to celcius');
let celc = convertToCelcius(faren);
let output = createMessage(faren, celc);
console.log(output);

faren = prompt('Lets try that again. enter a number, we will convert that number from farenheit to celcius');
celc = convertToCelcius(faren);
output = createMessage(faren, celc);
console.log(output);

faren = rand(110); 
celc = convertToCelcius(faren);
output = createMessage(faren, celc);
console.log(output);

faren = rand(110); 
celc = convertToCelcius(faren);
output = createMessage(faren, celc);
console.log(output);
