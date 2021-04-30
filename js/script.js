var playerMove, playerInput,computerMove, randomNumber, argMoveId, argPlayerMove, argComputerMove, buttonName, buttonRock, buttonPaper, buttonScissors;
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){buttonClicked('kamień');
});
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){buttonClicked('papier');
});
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){buttonClicked('nożyce');
});

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

function buttonClicked(buttonName) {
    clearMessages();
    console.log(buttonName + ' został kliknięty');
    playerMove = buttonName;
console.log('Ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 +1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('Ruch komputer to: ' + computerMove);
displayResult(playerMove, computerMove);
}
