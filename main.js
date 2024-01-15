import './style.css'


let scroreTotal = 16;
let cards = document.querySelectorAll(".cards");
let user_returned = 0;
let game_returned = 0;

let random
let tRandom = [];
let cardsSave;

let flag = false;


function getRandomMemoryValue(cards, tRandom) {
    // while (0 < cards.length) {
    // //   random = (cards[Math.floor(Math.random()*cards.length-1)]);
    // //   tRandom.push(random)
    // //   cards.slice(random.value);
    // }
}
getRandomMemoryValue(cards, tRandom);
// console.log(randomMemomy);


for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener('click', ()=>{
        if (flag === false) {
        cards[i].style.backgroundColor = "white"
        

            if (user_returned === 0) {

                user_returned ++;
                cardsSave = cards[i];
    
            }  else if (cards[i].dataset.indexNumber === cardsSave.dataset.indexNumber) {
    
                user_returned = 0;
                game_returned += 2;
    
            } else if (user_returned >= 2) {
                
                cards[i].style.backgroundColor = "black" 
    
            } else {
                flag = true
                setTimeout(() => {
                    cardsSave.style.backgroundColor = "black"
                    cards[i].style.backgroundColor = "black"  
                    flag = false
                }, 1000);
                
                user_returned = 0;
                
            } 
             if(scroreTotal === game_returned){
                setTimeout(() => {
                    alert("Bravo, tu as gagné");
                }, 500);
                
             }
            
        }

        
       }   )}  
    ;


