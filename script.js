
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

    
    function makeMove (board, players, index){

    const {player, currentPlayer, message} = players;
    if (board[index].textContent === ''){
        board[index].textContent = currentPlayer;
    } else {
        return; 
    }
    
    if (currentPlayer == player[0]) {
        message.textContent = `It's O's turn!`;
    } else {
        message.textContent = `It's X's turn!`
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
                players.message.textContent = `Game Over! ${currentPlayer} wins!`
                return true;
            }
        }
        return false;
    };
    
    function checkTie (){
        for (let i = 0; i < board.length; i++) {
           if (board.every (square => square.textContent !== '')) {
                players.message.textContent = `Game Over! It's a tie!`;
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

    
    gameBoardInst.forEach((square, index) => {
        square.addEventListener('click', () => {
            makeMove(gameBoardInst, gamePlayers, index);
        });
    });

    return {
        gameBoardInst,
        gamePlayers,
        gameChecker,
        makeMove
    }
})();


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




