
let card_nb;

const cards =['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif'];

const selected_cards=[];



function Number_cards(){

    
    card_nb = Number(prompt('Adicione um número par entre 4 e 14:'));
    
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
        `<div id="${selected_cards_random[i]}"    onclick="turn(this)"  class="carta-completa">
            <div  class="face back">
                <img src="./images/${selected_cards_random[i]}" alt="">
            </div>
            <div  class="face front">
                <img src="./images/back.png" alt="">
            </div>
        </div>`
    }
    
}

let clicks = 0;
let selected_list = [];
let win_soma = 0;
let clicks_all = 0;
let selected_element;

function turn(elemento){

    elemento.removeAttribute("onclick");

    elemento.classList.add('turn');

    clicks++

    if(clicks %2 == 0){
        let elemento_carta = document.querySelectorAll('.carta-completa')
        for(let i = 0; i < elemento_carta.length;i++){
            elemento_carta[i].removeAttribute('onclick');}
        
        if(elemento.id == selected_element.id){
            win_soma += 2
            for(let i = 0; i < elemento_carta.length;i++){
                setTimeout(()=>elemento_carta[i].setAttribute('onclick',"turn(this)"),1000)}
            elemento.removeAttribute('onclick')
            selected_element.removeAttribute('onclick')
            
            
        
        }
        else{
            setTimeout(()=>{selected_element.classList.remove('turn')},2000);
            setTimeout(()=>{elemento.classList.remove('turn')},2000);
            //elemento.setAttribute('onclick',"turn(this)")
            //selected_element.setAttribute('onclick',"turn(this)")
            for(let i = 0; i < elemento_carta.length;i++){
                setTimeout(()=>elemento_carta[i].setAttribute('onclick',"turn(this)"),1000)}
    
        }
    }


    if(clicks %2 !== 0){
    selected_element = elemento
    
   }

   clicks_all++

  
   end()

   
}

function end(){

    if(win_soma == card_nb){
        

    setTimeout(()=> alert(`Você ganhou em ${clicks_all} rodadas!`),1000)
    setTimeout(play_again,2000)
    selected_cards.length = 0
    
    
    }
   
    
    
}


function play_again(){

    win_soma = 0
    clicks = 0
    clicks_all = 0

    let clean = document.querySelector('.game')
    clean.innerHTML = ''

    let again = prompt('Você quer jogar novamente?')


    if(again == 'sim'){
        Number_cards()
    }
    else{
        play_again()
    }
}
    

Number_cards()


       