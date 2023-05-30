# tasks

- display the catchPhrase of the company below the company name.

```javascript
  // modify the return inside of renderCompanies to the following
  return `<li>
    ${company.name}</br>
    ${company.catchPhrase}
  </li>`
```

- display the description below each product

```javascript
  // modify the return inside of renderProducts to the following
  return `<li>
    ${product.name}</br>
    ${product.description}
  </li>`;
```

- display the suggested price of each product next to the product name

```javascript
  // modify the return inside of renderProducts to the following
  return `<li>
    ${product.name} - $${product.suggestedPrice}</br>
    ${product.description}
  </li>`;

```

- add a new unordered list which displays the states and the number of companies in each state

```html
  <!-- add the following code below the div containing the Products -->
  <div>
    <h2>States - Company Count</h2>
    <ul id='statesList'>
    </ul>
  </div>
```

```javascript
  // add a renderStates function with the following code
  const renderStates = () => {
    const statesObj = companies.reduce((acc, company) => {
      acc[company.state] ? acc[company.state] += 1 : acc[company.state] = 1;
      return acc;
    }, {});

    const statesHtml = Object.keys(statesObj).map(state => {
      return `
        <li>
          ${state} - ${statesObj[state]}
        </li>
      `
    }).join('');
    document.querySelector('ul#statesList').innerHTML = statesHtml;
  }

  // invoke the renderStates function after renderCompanies() in the fetchCompanies function
  renderStates();
```
