// gameboard module
const gameBoardModule = (() => {
    let gameBoard = ['X','O'];
    return {gameBoard};
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

const ryan = CreatePlayer('ryan', 'X');
console.log(ryan.name);
console.log(ryan.assignedXO);

// display module
const displayArray = (() => {
    const cells = document.querySelectorAll('.cell');
    cells[0].textContent = gameBoardModule.gameBoard[0];
    cells[1].textContent = gameBoardModule.gameBoard[1];
    return {};
})();


// module pattern
const object = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();

