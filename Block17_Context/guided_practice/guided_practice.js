class Sentence{
  constructor(data){
    this.data = data;
  }
  letterStatsStringified(){
    return JSON.stringify(this.letterStats(), null, 2);
  }
  wordStats(){
    const obj = {};
    const words = this.data.split(' ');
    for(let i = 0; i < words.length; i++){
      const word = words[i];
      if(obj[word] === undefined){
        obj[word] = 1;
      }
      else {
        obj[word]++;
      }
    }
    return obj;
  }
  letterStats(){
    const obj = {};
    for(let i = 0; i < this.data.length; i++){
      const letter = data[i];
      if(obj[letter] === undefined){
        obj[letter] = 1;
      }
      else {
        obj[letter]++;
      }
    }
    return obj;
  }
}

let data = prompt('enter a sentence', 'the quick brown fox jumped over the lazy dog');

const s1 = new Sentence(data);
console.log(s1.letterStats());
console.log(s1.letterStatsStringified());
console.log(s1.wordStats());
