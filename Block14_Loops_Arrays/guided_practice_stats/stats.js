function stats(arr){
  let total = 0;
  let product = 1;
  let max;
  for(let i = 0; i < arr.length; i++){
    total = total + arr[i];
    product = product * arr[i];
    if(max === undefined || arr[i] > max){
      max = arr[i];
    }
  }
  const info = [];
  info.push(`the sum of your array is ${total}`);
  info.push(`the product of your array is ${product}`);
  info.push(`the maximum value of your array is ${max}`);
  return info.join('\n\n');
}
const txt = prompt('enter some numbers separated by commas', '1,2,3');
const arr = txt.split(',');
for(let i = 0; i < arr.length; i++){
  arr[i] = arr[i] * 1;
}

console.log(stats(arr));
