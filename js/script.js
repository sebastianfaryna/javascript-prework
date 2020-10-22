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
        const displayResult = function(computerMove, playerMove) {
            console.log('Moves: ', computerMove, playerMove);
            if (computerMove == 'rock' && playerMove == 'paper') {
                printMessage("You've won! Point for you!");
                playerScore++;
                console.log('Points = ' + playerScore);
            } else if (computerMove == 'rock' && playerMove == 'scissors') {
                printMessage('You score!');
                playerScore++;
                console.log('Points = ' + playerScore);
            } else if (computerMove == 'scissors' && playerMove == 'rock') {
                printMessage('Nice!');
                playerScore++;
                console.log('Score = ' + playerScore);
            } else if (computerMove == playerMove) {
                printMessage('DRAW!');
                console.log('Draw... Points = ' + playerScore);
            } else {
                printMessage('YOU LOST!');
                playerScore = 0;
                console.log('Points reset = ' + playerScore);
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
}