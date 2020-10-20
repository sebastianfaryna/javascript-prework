{
const playGame = function(playerInput){
    clearMessages();
    const getMoveName = function(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        }
    }

    // Ruch komputera //
const randomNumber = Math.floor(Math.random() * 3 + 1);
const computerMove = getMoveName(randomNumber);
console.log('Wylosowana liczba to: ' + randomNumber);
printMessage('Mój ruch to: ' + computerMove);

    // Ruch Gracza //
const playerMove = getMoveName(playerInput);
console.log('Gracz wpisał: ' + playerInput);
printMessage('Twój ruch to: ' + playerMove);

    // Wynik gry //
const argComputerMove = getMoveName(randomNumber);
const argPlayerMove = getMoveName(playerInput);
const displayResult = function(argComputerMove, argPlayerMove){
console.log('Ruchy to:', argComputerMove, argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Wygrałeś!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Wygrałeś!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Wygrałeś!');
        } else if (argComputerMove == argPlayerMove){
            printMessage('Remis!');
        } else {
            printMessage('Przegrałeś!');
        }
    }
    displayResult(argComputerMove, argPlayerMove)
}

    // Buttons //
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
}