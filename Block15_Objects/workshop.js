function getStats(sentence){
  const obj = {};
  const words = sentence.split(' ');
  for(let i = 0; i < words.length; i++){
    const word = words[i];
    if(obj[word] === undefined){
      obj[word] = 0;
    }
    obj[word]++;
  }
  return obj;
}

const sentence = prompt('enter a sentence', 'be sure to be sure to have some repeating words to work with');

console.log(sentence);
const stats = getStats(sentence);
console.log(stats);
console.log(JSON.stringify(stats, null, 2));
