let cards = ['AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '0H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '0D', 'JD', 'QD', 'KD', 'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '0C', 'JC', 'QC', 'KC', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '0S', 'JS', 'QS', 'KS'];
function shuffle(arr) {
    let currentIndex = arr.length
    let randomIndex;
    while (currentIndex!=0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
  }
cards = shuffle(cards);
let moves = 0;
let p1Turn = true;
let p1Cards = cards.slice(0, 26);
let p2Cards = cards.slice(26);
let cardsStack = [];
let match = false;
document.addEventListener('DOMContentLoaded', () => {
    let btn1 = document.getElementById('p1');
    btn1.addEventListener('click', (evt) => {
        if(p1Turn && document.getElementById('p1num').innerHTML>0 && moves<50)
        {
            p1Turn = false;
            if(match)
            {
                document.getElementById('AS').innerHTML='';
                match = false;
            }
            let current = p1Cards.pop();
            cardsStack.push(current);
            document.getElementById('p1num').innerHTML = parseInt(document.getElementById('p1num').innerHTML)-1;
            document.getElementById('stacknum').innerHTML = parseInt(document.getElementById('stacknum').innerHTML)+1;
            document.getElementById('moves').innerHTML = parseInt(document.getElementById('moves').innerHTML)+1;
            moves+=1;
            document.getElementById('AS').innerHTML += ' '+current;
            document.getElementById('img').src = 'https://www.deckofcardsapi.com/static/img/'+current+'.png';
            if(current.charAt(1)==cardsStack[cardsStack.length-2].charAt(1))
            {
                p1Cards = cardsStack.concat(p1Cards);
                cardsStack = [];
                document.getElementById('p1num').innerHTML=parseInt(document.getElementById('p1num').innerHTML)+parseInt(document.getElementById('stacknum').innerHTML);
                document.getElementById('stacknum').innerHTML=0;
                document.getElementById('img').src = '';
                match = true;
            }
            if(document.getElementById('p1num').innerHTML==0)
                window.alert('Player 2 Wins!!!');
            if(moves==50)
                if(document.getElementById('p1num').innerHTML>document.getElementById('p2num').innerHTML)
                    window.alert('Player 1 Wins!!!');
                else
                    window.alert('Player 2 Wins!!!');
        }    
    });
    let btn2 = document.getElementById('p2');
    btn2.addEventListener('click', (evt) => {
        if(!p1Turn && document.getElementById('p1num').innerHTML>0 && moves<50)
        {
            p1Turn = true;
            if(match)
            {
                document.getElementById('AS').innerHTML='';
                match = false;
            }
            let current = p2Cards.pop();
            cardsStack.push(current);
            document.getElementById('p2num').innerHTML = parseInt(document.getElementById('p2num').innerHTML)-1;
            document.getElementById('stacknum').innerHTML = parseInt(document.getElementById('stacknum').innerHTML)+1;
            document.getElementById('moves').innerHTML = parseInt(document.getElementById('moves').innerHTML)+1;
            moves+=1;
            document.getElementById('AS').innerHTML += ' '+current;
            document.getElementById('img').src = 'https://www.deckofcardsapi.com/static/img/'+current+'.png';
            if(current.charAt(1)==cardsStack[cardsStack.length-2].charAt(1))
            {
                p2Cards = cardsStack.concat(p2Cards);
                cardsStack = [];
                document.getElementById('p2num').innerHTML=parseInt(document.getElementById('p2num').innerHTML)+parseInt(document.getElementById('stacknum').innerHTML);
                document.getElementById('stacknum').innerHTML=0;
                document.getElementById('img').src = '';
                match = true;
            }
            if(document.getElementById('p2num').innerHTML==0)
                window.alert('Player 1 Wins!!!');
            if(moves==50)
                if(document.getElementById('p1num').innerHTML>document.getElementById('p2num').innerHTML)
                    window.alert('Player 1 Wins!!!');
                else
                    window.alert('Player 2 Wins!!!');   
        }   
    });
});
