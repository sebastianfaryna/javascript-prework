function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

// Ruch komputera //

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

console.log('Wylosowana liczba to: ' + randomNumber);

printMessage('Mój ruch to: ' + computerMove);

// Ruch Gracza //

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');
let playerMove = getMoveName(playerInput);

console.log('Gracz wpisał: ' + playerInput);

printMessage('Twój ruch to: ' + playerMove);

// Wynik gry //

let argComputerMove = getMoveName(randomNumber);
let argPlayerMove = getMoveName(playerInput);

function displayResult(argComputerMove, argPlayerMove){
        console.log('Ruchy to:', argComputerMove, argPlayerMove);
if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Wygrałeś!');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Wygrałeś!');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Wygrałeś!');
      } else if (argComputerMove == argPlayerMove){
        printMessage('Remis!');
      } else if (argPlayerMove == 'nieznany ruch'){
        printMessage('Wybierz 1, 2 lub 3');
      } else {
        printMessage('Przegrałeś!');
      }
}

displayResult(argComputerMove, argPlayerMove)