/* JavaScript For Tic Tac Toe */
/* By Derek McGuire */

// Variables to facilitate the code and the gameplay
const board = document.querySelector('.board')
const message = document.querySelector('.message')
const resetBtn = document.querySelector('#reset')
let numberOfPlayers = 2
let turns = 0
let gameOver = false

const squarePossibilities = [0, 1, 2];

function checkBlankSquare() {

}

// arrays of winning combinations
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

// create the board
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

const choos = Array.from(document.querySelector('.choo'));

/** */

// create event listener for squares
document.addEventListener("click", e => {
    if (gameOver === true) return
    if (!e.target.matches('.square')) return
    if (e.target.matches('.choo')) return
    if (e.target.matches('.player-one')) return
    if (e.target.matches('.player-two')) return
    playGame(e)
})

// event listener for reset button
resetBtn.addEventListener("click", reset)


// if two players, take it in turns to play
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