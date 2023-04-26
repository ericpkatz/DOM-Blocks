# questions

- add y as an option for the vowels

```html
  <!-- add the following below option u -->
  <option>y</option>
```

- modify the output so it prints the letters in uppercase
  
```javascript
  // modify the text in the span inside the render function to be the following
  ${ letter.toUpperCase() }
```

- add an h2 to the page which displays a message showing the number of vowels and consonants

```html
  <!-- add the following below the h1 with an id of 'output' -->
  <h2 id="count">Vowels: 1 Consonants: 2</h2>
```

```javascript
  // modify the letters array from strings to objects using the following code
  let letters = [
    {
      character: 'a',
      isVowel: true
    },
    {
      character: 'b',
      isVowel: false
    },
    {
      character: 'c',
      isVowel: false
    },
  ];

  // add the following variable declarations below the letters array
  let vowelCount = 1;
  let consonantCount = 2;

  // add the following code inside the letters.map in the render function
  const letterType = letter.isVowel ? 'vowel' : 'consonant';

  // modify the return in the letters.map to be the following
  return `
    <span class=${letterType}>
      ${ letter.character.toUpperCase() }
    </span>
  `;

  // add the following code to the end of the render function
  const countHtml = `Vowels: ${vowelCount} Consonants: ${consonantCount}`;
  document.querySelector('#count').innerHTML = countHtml;
  
  // modify the letters.push in the querySelectors for #vowelForm and #consonantForm to the following
  letters.push({character: letter, isVowel: true});

  // add vowelCount++ after letters.push to the querySelector for #vowelForm
  vowelCount++;
  
  // add consonantCount++ after letters.push to the querySelector for #consonantForm
  consonantCount++;

  // add the following line of code in the if statement in the querySelector for #output
  event.target.classList[0] === 'consonant' ? consonantCount-- : vowelCount--;
```
