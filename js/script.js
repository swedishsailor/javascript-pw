var playerMove, playerInput,computerMove, randomNumber, argMoveId, argPlayerMove, argComputerMove;
playerInput = prompt('Wybierz swój ruch! 1: kamień 2:papier 3:nożyce');
console.log('Wpisana odpowiedź to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('Ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 +1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('Ruch komputer to: ' + computerMove);
displayResult(playerMove, computerMove);

// Functions

function getMoveName (argMoveId) {
    console.log('Wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    }else if (argMoveId == 2) {
        return 'papier';
    }else if (argMoveId == 3) {
        return 'nożyce';
    }else{
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o kamień');
        return 'kamień';
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('Wywołano funkcję displayResult z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if ((argPlayerMove == 'papier' && argComputerMove == 'kamień') || (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') || (argPlayerMove == 'nożyce' && argComputerMove == 'papier')) {
        printMessage('Wygrywasz');
    }else if (argComputerMove == argPlayerMove)
    {
        printMessage('Remis! Oboje daliście: '+ argPlayerMove);
    }
    else{
        printMessage('Przegrywasz');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a ty ' + argPlayerMove);
}