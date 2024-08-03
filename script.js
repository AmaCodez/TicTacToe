function Gameboard (){
    const board = [];

    for ( let i = 0; i < 3*3; i++) {
        const square = document.createElement('div');
        square.classList.add('cell');
        board.push(square);
    }
};

