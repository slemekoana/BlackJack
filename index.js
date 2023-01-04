let sum = 0
let cards = [] // array - ordered list of items
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
// let sumEl = document.querySelector("#sum-el")
// CASH OUT

let player = {
    name : "Selaelo",
    chips : 145

}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
//Create a function, getRandomCard(), that always returns the number 5 
function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    
    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    }
    return randomNum
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame() 
}

function renderGame() {
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    // render out ALL the cards we have
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message ="Do you want to draw a new card?"
    } else if  (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    // console.log()

    messageEl.textContent = message
    
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        // Puch the card to the cards array
        cards.push(card)
    
        renderGame()
    }
}