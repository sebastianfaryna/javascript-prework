// Ruch Gracza //

let playerMove = 'nieznany ruch';
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');

console.log('Gracz wpisał: ' + playerInput);

if(playerInput == '1'){
    playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

// Ruch komputera //

let computerMove = 'nieznany ruch';
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

if(randomNumber == 1){
    computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else if (randomNumber == 3){
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

// Wynik gry //

if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Wygrałeś!');
  } else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Wygrałeś!');
  } else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Wygrałeś!');
  } else if (computerMove == playerMove){
    printMessage('Remis!');
  } else if (playerMove == 'nieznany ruch'){
    printMessage('Remis!');
  } else {
    printMessage('Przegrałeś!');
  }
