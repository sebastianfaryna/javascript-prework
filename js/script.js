{
    // Punkty //
    let playerScore = 0;

    const playGame = function (playerInput) {
        clearMessages();
        const getMoveName = function (argMoveId) {
            if (argMoveId == 1) {
                return 'rock';
            } else if (argMoveId == 2) {
                return 'paper';
            } else if (argMoveId == 3) {
                return 'scissors';
            } else if (argMoveId == 4) {
                return 'lizard';
            } else if (argMoveId == 5) {
                return 'Spock';
            }
        }

        // Ruch Gracza //
        const playerMove = getMoveName(playerInput);
        console.log('Player input: ' + playerInput);
        printMessage('Your move is: ' + playerMove);

        // Ruch komputera //
        const randomNumber = Math.floor(Math.random() * 5 + 1);
        const computerMove = getMoveName(randomNumber);
        console.log('The drawn number is: ' + randomNumber);
        printMessage('My move is: ' + computerMove);

        // Wynik gry //
        const displayResult = function (argcomputerMove, argplayerMove) { // nazwy tych argumentów nie muszą być takie same jak zmiennych/stałych
            console.log('Moves: ', computerMove, playerMove);
            if ((computerMove == 'rock' && playerMove == 'paper') || (computerMove == 'rock' && playerMove == 'Spock')) {
                printMessage("You've won! Point for you!");
                playerScore++;
                console.log('Points = ' + playerScore);
            } else if ((computerMove == 'paper' && playerMove == 'scissors') || (computerMove == 'paper' && playerMove == 'lizard')) {
                printMessage('You score!');
                playerScore++;
                console.log('Points = ' + playerScore);
            } else if ((computerMove == 'scissors' && playerMove == 'rock') || (computerMove == 'scissors' && playerMove == 'Spock')) {
                printMessage('Good job! +1 for You');
                playerScore++;
                console.log('Score = ' + playerScore);
            } else if ((computerMove == 'Spock' && playerMove == 'paper') || (computerMove == 'Spock' && playerMove == 'lizard')) {
                printMessage('Way to go!');
                playerScore++;
                console.log('Score = ' + playerScore);
            } else if ((computerMove == 'lizard' && playerMove == 'rock') || (computerMove == 'lizard' && playerMove == 'scissors')) {
                printMessage('Keep it up!');
                playerScore++;
                console.log('Score = ' + playerScore);
            } else if (computerMove == playerMove) {
                printMessage('DRAW! Try again!');
                console.log('Draw... (' + playerScore + ')');
            } else {
                printMessage('YOU LOST!');
                playerScore = 0;
                console.log('Reset = ' + playerScore);
            }
        }
        displayResult(computerMove, playerMove); // ważne żeby kolejność deklaracji argumentów się zgadzała
        printMessage("Player's Scores: " + playerScore)
    }

    // Buttons //
    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });

    document.getElementById('play-lizard').addEventListener('click', function () {
        playGame(4);
    });

    document.getElementById('play-spock').addEventListener('click', function () {
        playGame(5);
    });
}