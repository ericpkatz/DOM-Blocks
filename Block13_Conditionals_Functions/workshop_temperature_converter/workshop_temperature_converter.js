function rand(limit){
  return Math.round(Math.random()*limit);
}

function convertToCelcius(fahren){
  return (fahren - 32) * (5 / 9);
}

function createMessage(fahren, celc){
  let feels;
  
  if(fahren < 32) {
    feels = 'very cold';
  } else if(fahren < 68) {
    feels = 'cold';
  } else if(fahren < 86) {
    feels ='warm'
  } else if(fahren < 100) {
    feels = 'hot'
  } else {
    feels = 'very hot';
  }
  return `${fahren} fahrenheit is ${celc} celcius and it feels ${feels}`;
};

let fahren = prompt('enter a number, we will convert that number from fahrenheit to celcius');
let celc = convertToCelcius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt('Lets try that again. enter a number, we will convert that number from fahrenheit to celcius');
celc = convertToCelcius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110); 
celc = convertToCelcius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110); 
celc = convertToCelcius(fahren);
output = createMessage(fahren, celc);
console.log(output);
