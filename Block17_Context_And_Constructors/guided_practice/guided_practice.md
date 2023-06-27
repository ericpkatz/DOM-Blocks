- remove the space character from the stats

```
  letterStats(){
    const obj = {};
    for(let i = 0; i < this.data.length; i++){
      const letter = data[i];
      if(obj[letter] != ' '){//added
        if(obj[letter] === undefined){
          obj[letter] = 1;
        }
        else {
          obj[letter]++;
        }
      }//added
    }
    return obj;
  }
```

- add a method called wordCount which will return the number of words in a sentence

```
  wordCount(){
    return this.data.split(' ').length;
  }
```

- add a method called letterCount which will return all the length of all the letters in a sentence. This method will not count spaces or punction.

```
  letterCount(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return this.data.split('').filter(ltr => {
      return alphabet.indexOf(ltr.toLowerCase()) !== -1;
    }).length;
  }
```
