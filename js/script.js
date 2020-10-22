    // Punkty //
let playerScore = 0;

{
const playGame = function(playerInput){
    clearMessages();
    const getMoveName = function(argMoveId){
        if(argMoveId == 1){
            return 'rock';
        } else if(argMoveId == 2){
            return 'paper';
        } else if(argMoveId == 3){
            return 'scissors';
        }
    }

    // Ruch komputera //
const randomNumber = Math.floor(Math.random() * 3 + 1);
const computerMove = getMoveName(randomNumber);
console.log('The drawn number is: ' + randomNumber);
printMessage('My move is: ' + computerMove);

    // Ruch Gracza //
const playerMove = getMoveName(playerInput);
console.log('Player input: ' + playerInput);
printMessage('Your move is: ' + playerMove);

    // Wynik gry //
const argComputerMove = getMoveName(randomNumber);
const argPlayerMove = getMoveName(playerInput);
const displayResult = function(argComputerMove, argPlayerMove){
console.log('Ruchy to:', argComputerMove, argPlayerMove);
    if(argComputerMove == 'rock' && argPlayerMove == 'paper'){
            printMessage("You've won! Point for you!"); ++playerScore; console.log('Score = ' + playerScore);
        } else if (argComputerMove == 'rock' && argPlayerMove == 'scissors'){
            printMessage('You score!'); ++playerScore; console.log('Score = ' + playerScore);
        } else if (argComputerMove == 'scissors' && argPlayerMove == 'rock'){
            printMessage('Nice!'); ++playerScore; console.log('Score = ' + playerScore);
        } else if (argComputerMove == argPlayerMove){
            printMessage('DRAW!'); console.log('Remis. Punkty = ' + playerScore);
        } else {
            printMessage('YOU LOST!'), playerScore = 0; console.log('Score reset = ' + playerScore);
        }
    }
    displayResult(argComputerMove, argPlayerMove);
    printMessage('Scores: ' + playerScore)
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