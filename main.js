import './style.css'


let scroreTotal = 16;
let cards = document.querySelectorAll(".cards");
let user_returned = 0;
let game_returned = 0;

let random
let cardsSave;

let flag = false;
let result = [];

function shuffleArray(arr) {
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length)
        result.push(arr[random]);

        arr = arr.slice(0, random).concat(arr.slice(random+1))
        
    }
}
shuffleArray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]);
console.log(result);


for (let i = 0; i < cards.length; i++) {
    cards[i].textContent = result[i]

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


