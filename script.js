const cells = document.querySelectorAll('.cell');
const container = document.querySelector(".container");
const button = document.querySelector('#btn');
const cell1 = document.querySelector('#cell-1');
const cell2 = document.querySelector('#cell-2');
const cell3 = document.querySelector('#cell-3');
const cell4 = document.querySelector('#cell-4');
const cell5 = document.querySelector('#cell-5');
const cell6 = document.querySelector('#cell-6');
const cell7 = document.querySelector('#cell-7');
const cell8 = document.querySelector('#cell-8');
const cell9 = document.querySelector('#cell-9');

// X/O array
const gameBoardModule = (() => {
    let gameBoard = [];

    return {gameBoard};
})();

// displays X/O
const displayController = (() => {
    index = 0;
    cells.forEach(cell => {
        cell.addEventListener('click', displayArray);

        function displayArray() {
            if (index % 2 == 0) {
                cell.textContent = gameBoardModule.gameBoard[0];
            } else {
                cell.textContent = gameBoardModule.gameBoard[1];
            }
            index++;            
        }
    })
})();

// check winner
const checkWinner = (() =>  {
    if ( (cell1.value == cell2.value) && (cell2.value == cell3.value) && (cell1.value != null)) {
        console.log('winner!');
    }
})();


// players factory function
function CreatePlayer(name, assignedXO) {
    const sayHello = () => console.log(`Hello ${name}, my symbol is ${assignedXO}`);
    return {
        name,
        assignedXO,
        sayHello,
    };
}

const displayPlayer = (() => {
    const name = document.querySelector('#name');
    const xButton = document.querySelector('#X');
    const oButton = document.querySelector('#O');

    const removeAllChildNodes = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    };

    button.addEventListener('click', displayPlayer);

    function displayPlayer() {
        let newDiv = document.createElement('div');
        removeAllChildNodes(container);

        if (xButton.checked) {
            const buttonValue = 'X';
            newDiv.textContent =`Player one: ${name.value} ${buttonValue}`;
            let player1 = CreatePlayer(name.value, buttonValue);
            let player2 = CreatePlayer(name.value, 'O');
            gameBoardModule.gameBoard.push(buttonValue);
            gameBoardModule.gameBoard.push('O');
        } else if (oButton.checked) {
            const buttonValue = 'O';
            newDiv.textContent =`Player one: ${name.value} ${buttonValue}`;
            let player1 = CreatePlayer(name.value, buttonValue);
            let player2 = CreatePlayer(name.value, 'X');
            gameBoardModule.gameBoard.push(buttonValue);
            gameBoardModule.gameBoard.push('X');
        } else {
            newDiv.textContent =`Please select your symbol!`;
        }

        container.append(newDiv); 
        form.reset();   
        
        return {
            displayPlayer,
        }
    }
})();




