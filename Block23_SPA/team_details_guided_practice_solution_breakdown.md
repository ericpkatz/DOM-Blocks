# tasks

- display the number of players on the team next to the link which lists the team.

```javascript
  // modify the return in the teams.map inside the renderList function to be the following code
  return `<li class='${id === team.id ? 'selected': ''}'>
    <a href='#${team.id === id ? '': team.id}'>${team.name}</a> - ${team.players.length}
  </li>`;
```

- display the date the team was created underneath the name of the link for the team.

```javascript
  // modify the return in the teams.map inside the renderList function to be the following code
  return `<li class='${id === team.id ? 'selected': ''}'>
    <a href='#${team.id === id ? '': team.id}'>${team.name}</a> - ${team.players.length}</br>
    <time datetime="${team.createdAt}">${new Date(team.createdAt).toDateString()}</time>
  </li>`;
```

- instead of displaying all of the data using JSON.stringify and the pre tag, use a div and display the following using a template string
  - team name and score
  - each player's name, breed, and status

```html
  <!-- change the pre tag to a div tag -->
  <div>
  </div>
```

```javascript
  // modify the renderDetails function by removing the const pre and pre.innerText lines of code and then adding the following code to replace it
  const div = document.querySelector('div');
  div.innerText = team ? `
    name: ${team.name},
    score: ${team.score},
    players: [
      ${team.players.map(player => {
        return `
          name: ${player.name},
          breed: ${player.breed},
          status: ${player.status}
        `
      }).join('')}
    ]
  ` : '';
```
