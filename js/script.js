function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o numerze ' + argMoveId + '.');
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

let ComputerMove = getMoveName(randomNumber);
let PlayerMove = getMoveName(playerInput);

function displayResult(ComputerMove, PlayerMove){
        console.log('Ruchy to:', ComputerMove, PlayerMove);
if(ComputerMove == 'kamień' && PlayerMove == 'papier'){
        printMessage('Wygrałeś!');
      } else if (ComputerMove == 'papier' && PlayerMove == 'nożyce'){
        printMessage('Wygrałeś!');
      } else if (ComputerMove == 'nożyce' && PlayerMove == 'kamień'){
        printMessage('Wygrałeś!');
      } else if (ComputerMove == PlayerMove){
        printMessage('Remis!');
      } else if (PlayerMove == 'nieznany ruch'){
        printMessage('Wybierz 1, 2 lub 3');
      } else {
        printMessage('Przegrałeś!');
      }
}

displayResult(ComputerMove, PlayerMove)