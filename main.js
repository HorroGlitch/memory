import './style.css'

let cards = document.querySelectorAll(".cards");

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', ()=>{
        console.log("hello");
    })
    
}
