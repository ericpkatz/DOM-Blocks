const nav = document.querySelector('nav');
const ul = document.querySelector('ul');
let players;

const render = ()=> {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const hash = window.location.hash.slice(1);
  let html = letters.split('').map( letter => {
    const filtered = players.filter(player => player.name.toUpperCase().startsWith(letter));
    const selected = hash === letter;
    return `
      <a ${ selected ? 'class=selected': ''} ${filtered.length ? `href='#${hash !== letter ? letter : ''}'`:''}>${letter}</a>
    `;
  }).join('');
  nav.innerHTML = html;

  const filtered = players.filter(player => {
    return hash && player.name.toUpperCase().startsWith(hash);
  });

  html = filtered.map( player => {
    return `
      <li>
        <img src='${player.imageUrl}' />
        <br />
        ${player.name }
        <br />
        ${player.breed}
      </li>
    `;
  }).join('');
  ul.innerHTML = html;
};

const init = async()=> {
  const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/MY_COHORT/players');
  const json = await response.json();
  players = json.data.players;
  render();
};

init();

window.addEventListener('hashchange', (ev)=> {
  render();
});
