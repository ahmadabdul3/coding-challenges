
// - shuffle a deck of 52 cards
// - for 52 times
//.  - get a random number between 1 and array.length - i
//   - each iteration, take the item at index x and remove it from the array

function shuffle(deck) {
    console.clear();
    const result = [];
    const numIterations = deck.length;

    for (let i = 0; i < numIterations; i++) {
        const random = Math.floor(Math.random() * deck.length);
        const randomCard = deck.splice(random, 1)[0];
        result.push(randomCard);
    }

    console.log('*** result', result);
}

shuffle(getDeck());


function getDeck() {
    const deck = [];
    for (let i = 0; i < 52; i++) {
        deck.push(i);
    }

    return deck;
}