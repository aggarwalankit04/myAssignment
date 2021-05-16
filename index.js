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
function createScreen(cards) {
    let createCards = document.querySelector(".number-wrapper");
    createCards.innerHTML = '';
    cards.forEach((card,index) => {
        createCards.innerHTML +=`<div class="${card.colorCode}">${card.value}</div>`;
    })
}

//shuffle the cards randomly
function shuffleCards(cards) {
    for (var cardIndex = cards.length - 1; cardIndex > 0; cardIndex--) {
        var randomIndex = Math.floor(Math.random() * (cardIndex + 1));
        var temp = cards[cardIndex];
        cards[cardIndex] = cards[randomIndex];
        cards[randomIndex] = temp;
    }
    return cards;
}

//sorting the card on their value
function sortCards(cards){
   return cards.sort((a,b) => a.value - b.value );
}

//Shuffling cards when clicked
document.querySelector(".shuffleCards").addEventListener("click", function(){
    let cards= shuffleCards(cardObject)
    createScreen(cards);

});

//Sort the  cards when button clicked clicked
document.querySelector(".sortCards").addEventListener("click", function(){
    let cards = sortCards(cardObject);
    createScreen(cards);

});

//callig to render the screen with cards
createScreen(cardObject);

