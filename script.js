
// This creates the Gameboard and game play
const GameBoard = (function () {
    
    function gameBoard (){
        const board = [];
    
        for ( let i = 0; i < 3 * 3; i++) {
            const square = document.createElement('div');
            square.classList.add('cell');
            board.push(square);
        }
        return board;
    };

    
    function makeMove (board, players){
        const {player, currentPlayer, message} = players;
        for(let i = 0; i < board.length; i++){
        if (board[i].textContent === ''){
            //  console.log("Selected square:", board[i]);
            
            board[i].textContent = currentPlayer;
            break // Only one move per click
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

    // const winResult = gameChecker.checkWin(players.currentPlayer);
    // if (winResult) {
    //   console.log(winResult);
    // }
    // const tieResult = gameChecker.checkTie();
    // if (tieResult) {
    //   console.log(tieResult);
    // }


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
                players.message.textContent = `Game Over! ${currentPlayer} wins!`
                // console.log("Win condition met!"); 
                // console.log(winCombinations[i]);
                return true;
            }
        }
        return false;
    };
    
    function checkTie (){
        for (let i = 0; i < board.length; i++) {
           if (board.every (square => square.textContent !== '')) {
                players.message.textContent = `Game Over! It's a tie!`;
            //    console.log("It's a tie!"); 
               return true;
           }
           return false;
        }
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
        message : document.querySelector('.message')
    };
    const gameChecker = createGameChecker(gameBoardInst, gamePlayers);

    
    gameBoardInst.forEach((square) => {
        square.addEventListener('click', () => {
            makeMove(gameBoardInst, gamePlayers);
        });
    });

    return {
        gameBoardInst,
        gamePlayers,
        gameChecker,
        makeMove
    }
})();

// const gamePlayers = {
//     player: ['X', 'O'],
//     currentPlayer : 'X',
//     message : document.querySelector('.message')
// };

//UI of the gameboard

// Reset the gameboard
const displayGame = (function (){
    const boardContainer = document.querySelector('.board-container');
    const resetBtn = document.querySelector('.restBtn');

    resetBtn.addEventListener ("click", () => {
        GameBoard.gameBoardInst.forEach((square) => {
            square.textContent = ''; 
        });
        
        GameBoard.gamePlayers.message.textContent = `It's X's turn!`;
        GameBoard.gamePlayers.currentPlayer = GameBoard.gamePlayers.player[0];
        });

        GameBoard.gameBoardInst.forEach((square) => {
            boardContainer.appendChild(square);
        });

    return{
        boardContainer,
        resetBtn
    }
})();




