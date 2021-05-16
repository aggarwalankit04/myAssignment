//setting up the array of object with css property and value, for the Card to be display on screen
var cardObject = [
    {
        "colorCode":"color4",
        "value":1
    },
    {
        "colorCode":"color2",
        "value":2
    },
    {
        "colorCode":"color8",
        "value":3
    },
    {
        "colorCode":"color2",
        "value":4
    },
    {
        "colorCode":"color8",
        "value":5
    },
    {
        "colorCode":"color6",
        "value":6
    },
    {
        "colorCode":"color6",
        "value":7
    },
    {
        "colorCode":"color4",
        "value":8
    },
    {
        "colorCode":"color8",
        "value":9
    }

];

//function for setup cards screen
function CreateScreen(cards) {
    let createCards = document.querySelector(".number-wrapper");
    createCards.innerHTML = '';
    cards.forEach((v,i) => {
        createCards.innerHTML +=`<div class="${v.colorCode}">${v.value}</div>`;
    })
}

//shuffle the cards randomly
function shuffleCards(cards) {
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards;
}

//sorting the card on their value
function sortCards(cards){
   return cards.sort((a,b) => a.value - b.value );
}

//Shuffling cards when clicked
document.querySelector(".shuffleCards").addEventListener("click", function(){
    console.log("clicked");
    let cards= shuffleCards(cardObject)
    CreateScreen(cards);

});

//Sort the  cards when button clicked clicked
document.querySelector(".sortCards").addEventListener("click", function(){
    console.log("clicked");
    let cards = sortCards(cardObject);
    CreateScreen(cards);

});

//callig to render the screen with cards
CreateScreen(cardObject);

