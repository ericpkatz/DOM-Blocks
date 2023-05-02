function getStats(sentence){
  const obj = {};
  for(let i = 0; i < sentence.length; i++){
    const letter = sentence[i];
    if(obj[letter] === undefined){
      obj[letter] = 0;
    }
    obj[letter]++;
  }
  return obj;
}

const sentence = prompt('enter a sentence', 'a sample sentence here');

console.log(sentence);
const stats = getStats(sentence);
console.log(stats);
console.log(JSON.stringify(stats, null, 2));
