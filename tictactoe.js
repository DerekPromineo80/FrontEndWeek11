/* JavaScript For Tic Tac Toe */
/* By Derek McGuire */

// Note: Heavily influenced by:
// https://codepen.io/beccapirie/pen/zYKMGVX

// Variables to facilitate the code and the gameplay
const board = document.querySelector('.board')
const message = document.querySelector('.message')
const resetBtn = document.querySelector('#reset')
let numberOfPlayers = 2
let turns = 0
let gameOver = false

// Attempted 
const squarePossibilities = [0, 1, 2];

// Attempted 
function checkBlankSquare() {

}

// winningCombinations is an Array of Array objects
// Each of the squares has an ID, and there are 9
// 0, 1, 2
// 3, 4, 5
// 6, 7, 8
// and so when a "tab" is clicked, the DOM
// gives an ID to that area
// Then the checkForWinner function
// is satisfied during the running of the game function
// and a Winner is declared
// Which activates the message alerting of a winner
// depending on which player (player-one, or player-two)
// has been given that class as well
// The modular operator determines that every other click
// is either player 1 or player 2
// player 1 always goes first
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// The for loop creates the board
// by creating div elements
// id's equal 0 through 8 
for (let i = 0; i < 9; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.innerHTML = `<img src="tictactoeblank.png" class="choo b">`
    // const choo = document.createElement('img')
    // choo.classList.add('choo')
    square.dataset.squareId = i
    // square.appendChild(choo)
    board.appendChild(square)
}
const squares = Array.from(document.querySelectorAll('.square'))

// Attempt: Tried to use a 'choo' class to be able to click on images
const choos = Array.from(document.querySelector('.choo'));



// Event Listener for squares
// Essentially an arrow function
// That has cascading if statements
document.addEventListener("click", e => {
    if (gameOver === true) return
    if (!e.target.matches('.square')) return
    if (e.target.matches('.choo')) return
    if (e.target.matches('.player-one')) return
    if (e.target.matches('.player-two')) return
    playGame(e)
})

// event listener for reset button
// When the reset button is clicked,
// the reset function is called
resetBtn.addEventListener("click", reset)


// Play alternates between two players
// If the turn (or "click") is even (0th click, 2nd, 4th, etc)
// Play is counted as a player 1
// the class of 'player-one' is added to the div
// which is used in the checkForWinner function
// Same thing for player 2
function playGame(e) {
    if (turns % 2 === 0) {
        e.target.classList.add('player-one')
        e.target.innerHTML = `<img src="tictactoex.png" class="choo x">`
        message.innerText = "Player Two's turn (O)"
        checkForWinner()
    } else {
        e.target.classList.add('player-two')
        e.target.innerHTML = `<img src="tictactoeo.png" class="choo o">`
        message.innerText = "Player One's turn (X)"
        checkForWinner()
    } turns ++

    if (turns === squares.length  && gameOver === false) {
        message.innerText = "Game Over (Tie Game)"
        alert("Game Over / Tie Game")
        gameOver = true
    }
}
// calling the playGame function here to run the game
playGame(e);

// check for a winning combination
// Uses the Array created 
// Because the squares have ID's, 
// This array finds combinations containing the newly added ID
function checkForWinner() {
    winningCombinations.forEach(combination => {
        if (combination.every(index => squares[index].classList.contains('player-one'))) {
            message.innerText = "Player One (X) wins!"
            alert("Player One (X) Wins!")
            gameOver = true
        } else if (combination.every(index => squares[index].classList.contains('player-two'))) {
            message.innerText = "Player Two (O) wins!"
            alert("Player Two (O) Wins!")
            gameOver = true
        } 
    })
}

// reset the game
function reset() {
    squares.forEach(square => {
        square.classList.remove('player-one')
        square.classList.remove('player-two')
        square.innerHTML = `<img src="tictactoeblank.png">`
        message.innerText = "Player One (X) Goes First"
        turns = 0
        gameOver = false
    })
}


const generateImg = document.getElementById('square');

function giveAnImage() {
    generateImg.innerHTML = `
        <img src="tictactoex.png">
    `
};