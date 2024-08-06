
// This creates the Gameboard and game play
const GameBoard = (function () {
    
    function gameBoard (){
        const board = [];
    
        for ( let i = 0; i < 3 * 3; i++) {
            const square = document.createElement('div');
            square.classList.add('cell');
            board.push(square);
        }
        console.log(board);
        return board;
    };

    
    function makeMove (board, players){
        const {player, currentPlayer, message} = players;
        for(let i = 0; i < board.length; i++){
        if (board[i].textContent == ''){

            console.log("Selected square:", board[i]);
            
            board[i].textContent = currentPlayer;
            break // Ensure only one move per click
        }
    }
    
    if (currentPlayer == player[0]) {
        message.textContent = `It's X's turn!`;
    } else {
        message.textContent = `It's O's turn!`
    }
    
    players.currentPlayer = currentPlayer == player[0] ? player[1] : player[0];
    
    gameChecker.checkWin(players.currentPlayer);
    gameChecker.checkTie();

    }
    
    function createGameChecker (board, players){

        function checkWin(currentPlayer) {
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
    
        for (let i = 0; i < winCombinations.length; i++){
            const [a, b, c] = winCombinations[i];
            if (board[a].textContent === currentPlayer && board[b].textContent === currentPlayer && board[c].textContent === currentPlayer) {
                return message.textContent = `Game Over! ${currentPlayer} wins!`
            }
        }
        console.log("Win condition met!"); 
        console.log(winCombinations[i]);
    };
    
    function checkTie (){
        for (let i = 0; i < board.length; i++) {
           if (board.every (square => square.textContent !== '')) {
               return message.textContent = `Game Over! It's a tie!`;
           }
        }
        console.log("It's a tie!"); 
       };
    
       return {
        checkWin,
        checkTie
       }
    };

    const gameBoardInst = gameBoard();
    const gamePlayers = {
        player: ['X', 'O'],
        currentPlayer : 'X',
        message : document.createElement('p')
    };
    const gameChecker = createGameChecker(gameBoardInst, gamePlayers);

    
    gameBoardInst.forEach((square) => {
        square.addEventListener('click', () => {
            makeMove(gameBoardInst, gamePlayers);
        });
    });

    return {
        gameBoardInst,
        gameChecker,
        makeMove
    }
})();

const gamePlayers = {
    player: ['X', 'O'],
    currentPlayer : 'X',
    message : document.createElement('p')
};

//UI of the gameboard

// const displayGame = (function (){
    // const boardContainer = document.querySelector('');
    //const message = document.querySelector('');
    //const restBtn = document.querySelector('');
// });()


// Reset Button
// resetBtn.addEventListner ("click", () => {
//         square.textContent = '';

//         message.textContent = `It's X's turn!`;
//         currentPlayer = player[0];
// });


