const app = {
  test: () => {
    console.log('kikoo front')
  },
  getOnePokemonTest: async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/25`)
    .then(function(res) {
      if (res.ok) {
        console.log('pokemon OK');
        return res.json();
      }
    })
    .then(function(objReturned) {
      console.log(objReturned);
    });
  },
  printOneCard: async () => {
    await fetch(`http://localhost:3000/lists`, {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json',}
    })
    .then(function(res) {
      if (res.ok) {
        console.log('1- res.ok Listes OK');
        console.log('res:', res);
        return res.json();
      } else {
        console.error('1.5- res not OK, no res');
      }
    })
    .then(function(objReturned) {
      console.log('2- then obj OK')
      console.log('OBJET:', objReturned);
    });
  },
  printOneCardKO: async () => {
    const request = `http://localhost:3000/cards/12`;
    
    fetch(requestPokemon, {mode: 'no-cors'})
    .then(function(response) {
      if(response.ok) {
        const data = response.json();
        console.log('Response ok')
        console.log('LES DATA:', data);
        return data;
      } else {
        console.log('Response pas ok');
        throw new Error(response.statusText);
      }
    })
    .then(function (response) {
      console.log('on est dans le 2e then');
    })
    .catch(function(error) {  
      console.log('Request ratée:', error);
    });
    

    const cardDiv = document.createElement('div');
    const kanbanBoard = document.getElementById('kanbanBoard');
    cardDiv.classList.add('card');
    cardDiv.style.backgroundColor = "red";
    kanbanBoard.appendChild(cardDiv);
    const cardText = document.createElement('h2');
    cardText.classList.add('card-text');
    cardText.textContent = 'test';
    cardDiv.appendChild(cardText);
  },
  init: async () => {
    app.test();
    await app.getOnePokemonTest();
    await app.printOneCard();
  }
};

document.addEventListener('DOMContentLoaded', app.init);