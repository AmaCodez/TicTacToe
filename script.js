// Gameboard
function gameBoard (){
    const board = [];

    for ( let i = 0; i < 3 * 3; i++) {
        const square = document.createElement('div');
        square.classList.add('cell');
        board.push(square);
    }
};

// Players
function players () {
    const player = ['X', 'O'];
    let currentPlayer = player[0];
    const message = document.createElement('p');
};

//Game play, needs to be in a button
function gamePlay (){
for(let i = 0; i < square.length; i++){
    if (square[i].textContent == ''){
        square[i].textContent == currentPlayer;
    } else { return }
}

if (currentPlayer == player[0]) {
    message.textContent = `It's X's turn!`;
} else {
    message.textContent = `It's O's turn!`
}

currentPlayer = currentPlayer == player[0] ? player[1] : player[0];

getWin();
checkTie();
}

//winnign combo
const winCombinations = [
    [0, 1, 2],
    [3 , 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Check win
function getWin(currentPlayer) {
    for (let i = 0; i < winCombinations.length; i++){
        const [a, b, c] = winCombinations;
        if (square[a] == currentPlayer && square[b] == currentPlayer && square[c]) {
            return message.textContent = `Game Over! ${currentPlayer} wins!`
        }
    }
};

// Check tie

function checkTie (){
 for (let i = 0; i < square.length; i++) {
    if (square[i].textContent !== '') {
        return message.textContent = `Game Over! It's a tie!`;
    }
 }
};

// Reset Button
// resetBtn.addEventListner ("click", () => {
//         square.textContent = '';

//         message.textContent = `It's X's turn!`;
//         currentPlayer = player[0];
// });


