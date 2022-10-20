
let card_nb;

const cards =[
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif'
];

const selected_cards=[];



function Number_cards(){
    
    card_nb = Number(prompt('quantas cartas?'))
    
    if(card_nb < 4 || card_nb > 14 || card_nb % 2 !== 0){
        Number_cards()
        selected_cards = []
    }

    for(let i = 0; i < (card_nb/2);i++){
        selected_cards.push(cards[i])
        selected_cards.push(cards[i])
    }

   

    give_cards()
    

}




function give_cards(){

    const element_card = document.querySelector('.game');
    const selected_cards_random = selected_cards.sort(()=>Math.random()-0.5)
   

    for(let i = 0; i < selected_cards_random.length;i++){
        element_card.innerHTML +=
        `<div onclick="turn(this)"  class="carta-completa">
            <div  class="face back">
                <img src="./images/${selected_cards_random[i]}" alt="">
            </div>
            <div  class="face front">
                <img src="./images/back.png" alt="">
            </div>
        </div>`
    }
    
}

function turn(elemento){
  elemento.classList.toggle('turn')


}

Number_cards()
       

  