import './style.css'

let cards = document.querySelectorAll(".cards");
let user_returned = 0;
let game_returned = 0;

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', ()=>{
        if (user_returned < 2) {
            cards[i].style.backgroundColor = "white"
            user_returned ++;
        }
    });
}
