function stats(arr){
  let total = 0;
  let max;
  for(let i = 0; i < arr.length; i++){
    if(max === undefined || arr[i].length > max.length){
      max = arr[i];
    }
    total = total + arr[i].length;

  }

  const info = [];
        info.push(`You entered ${arr.length} words`);
        info.push(`The average lengthof your words is ${total / arr.length} words`);
        info.push(`The longest word you entered has a length of ${ max.length }`);
  return info.join('\n\n');
}
const txt = prompt('enter some strings separated by commas', 'foo,bar,bazz,hello,world!!');
const words = txt.split(',');

console.log(stats(words));
