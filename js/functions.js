function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML='';
}

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
    if ((argPlayerMove == 'papier' && argComputerMove == 'kamień') || (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') 
    || (argPlayerMove == 'nożyce' && argComputerMove == 'papier')) {
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

function buttonClicked(buttonName) {
const playerMove = buttonName,
    randomNumber = Math.floor(Math.random() * 3 +1),
    computerMove = getMoveName(randomNumber);
clearMessages();
console.log(buttonName + ' został kliknięty');
console.log('Ruch gracza to: ' + playerMove);
console.log('wylosowana liczba to: ' + randomNumber);
console.log('Ruch komputer to: ' + computerMove);
displayResult(playerMove, computerMove);
}
