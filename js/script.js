{
    // Punkty //
    let playerScore = 0;

    const playGame = function(playerInput) {
        clearMessages();
        const getMoveName = function(argMoveId) {
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
        printMessage('Your move is: ' + playerMove);

        // Ruch komputera //
        const randomNumber = Math.floor(Math.random() * 5 + 1);
        const computerMove = getMoveName(randomNumber);
        printMessage('My move is: ' + computerMove);

        // Wynik gry //
        const displayResult = function(argComputerMove, argPlayerMove) {
            if ((argComputerMove == 'rock' && argPlayerMove == 'paper') || (argComputerMove == 'rock' && argPlayerMove == 'Spock')) {
                printMessage("You've won! Point for you!");
                playerScore++;
            } else if ((argComputerMove == 'paper' && argPlayerMove == 'scissors') || (argComputerMove == 'paper' && argPlayerMove == 'lizard')) {
                printMessage('You score!');
                playerScore++;
            } else if ((argComputerMove == 'scissors' && argPlayerMove == 'rock') || (argComputerMove == 'scissors' && argPlayerMove == 'Spock')) {
                printMessage('Good job! +1 for You');
                playerScore++;
            } else if ((argComputerMove == 'Spock' && argPlayerMove == 'paper') || (argComputerMove == 'Spock' && argPlayerMove == 'lizard')) {
                printMessage('Way to go!');
                playerScore++;
            } else if ((argComputerMove == 'lizard' && argPlayerMove == 'rock') || (argComputerMove == 'lizard' && argPlayerMove == 'scissors')) {
                printMessage('Keep it up!');
                playerScore++;
            } else if (argComputerMove == argPlayerMove) {
                printMessage('DRAW! Try again!');
            } else {
                printMessage('YOU LOST!');
                playerScore = 0;
            }
        }
        displayResult(computerMove, playerMove);
        printMessage("Player's Scores: " + playerScore)
    }

    // Buttons //
    document.getElementById('play-rock').addEventListener('click', function() {
        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function() {
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function() {
        playGame(3);
    });

    document.getElementById('play-lizard').addEventListener('click', function() {
        playGame(4);
    });

    document.getElementById('play-spock').addEventListener('click', function() {
        playGame(5);
    });
}