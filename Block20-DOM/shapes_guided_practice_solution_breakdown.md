# questions

- add a second unordered list
  
```html
  <!-- add the following code below the ul that was created in the demo -->
  <ul>
  </ul>
```

- add code that fills the new unordered list with circles

```html
  <!-- update the new ul that was created in the previous step to include an id -->
  <ul id="circles">
  </ul>
```

```javascript
  // update the render function to include the following code
  const circleHtml = circles.map(circle => {
    return `<div class='${circle.color} ${circle.size} circle'></div>`;
  }).join('');
  document.querySelector('#circles').innerHTML = circleHtml;
```

```css
  /* add the following style rule below the .lg style rule */
  .circle {
    border-radius: 50%
  }
```

- modify the application to support yellow shapes
  
```css
  /* add the following style rule below the .green style rule */
  .yellow {
    background-color: yellow;
  }
```

```javascript
  // add the string 'yellow' to the color array in the setInterval and change the multiplier to 3
  const color = ['red', 'green', 'yellow'][Math.floor(Math.random() * 3)];
```

- modify the application to support a new size with a class of xl which will be 100px

```css
  /* add the following style rule below the .lg style rule */
  .xl {
    width: 100px;
    height: 100px;;
  }
```

```javascript
  // add the string 'xl' to the size array in the setInterval and change the multiplier to 4
  const size = ['sm', 'md', 'lg', 'xl'][Math.floor(Math.random() * 4)];
```

- modify the application so that it will generate up to 50 of each shape

```javascript
  // modify the if statement to check if there are 50 squares
  if(squares.length === 50){
    clearInterval(interval);
  }
```
