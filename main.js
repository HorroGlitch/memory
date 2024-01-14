import './style.css'


let scroreTotal = 16;
let cards = document.querySelectorAll(".cards");
let user_returned = 0;
let game_returned = 0;

let randomCardValue;

let randomMemomy = [];
let cardsSave;


function getRandomMemoryValue(cards, randomMemomy) {
let i = 0
    while (i < cards[i]) {
      randomCardValue = cards[Math.floor(Math.random()*cards.length)];
      console.log(randomCardValue);
      randomMemomy.push(randomCardValue);
      cards.slice(randomCardValue);

    }
}
getRandomMemoryValue(cards, randomMemomy);
console.log(randomMemomy);

for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener('click', ()=>{
        cards[i].style.backgroundColor = "white"
        if (user_returned === 0) {

            cardsSave = cards[i];

            user_returned ++;

        } else if (cards[i].dataset.indexNumber === cardsSave.dataset.indexNumber) {

            user_returned = 0;
            game_returned += 2;

        } else  {
            setTimeout(() => {
                cardsSave.style.backgroundColor = "black"
                cards[i].style.backgroundColor = "black"  
            }, 1000);
    
            user_returned = 0;
            
        } 
         if(scroreTotal === game_returned){
            setTimeout(() => {
                alert("Bravo, tu as gagné");
            }, 500);
            
         }
        } )  
    };


