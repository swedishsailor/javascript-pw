var computerMove;
var playerMove;
var randomNumber;
randomNumber = Math.floor(Math.random() * 3 +1);
computerMove = 'kamień';
playerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + playerMove + '! Jeśli twój ruch to kamień, to wygrywasz!');
printMessage('Wylosowana livzba to: ' + randomNumber);