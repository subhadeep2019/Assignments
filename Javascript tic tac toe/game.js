var game = (function () {

    var player1 = new Player('Player 1', "X");
    var player2 = new Player('Player 2', "O");
    var currentPlayer = player1;
    var positions = ["", "", "", "", "", "", "", "", ""];
    var winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function setNextPlayer() {
        if (currentPlayer === player1) {
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
    }

    function play() {
        var matchStatus = new MatchStatus(false, false);

        if (isThereAWinner()) {
            matchStatus.IsMatchWon = true;
        }
        else if (isMatchDrawn()) {
            matchStatus.IsMatchDraw = true;
        }
        else {
            setNextPlayer();
        }        
        return matchStatus;
    }

    function isThereAWinner() {
        for (i = 0; i < winningPositions.length; i++) {
            if ((positions[winningPositions[i][0]] === currentPlayer.Symbol)
                && (positions[winningPositions[i][1]] === currentPlayer.Symbol)
                && (positions[winningPositions[i][2]] === currentPlayer.Symbol)) {
                return true;
            }
        }
        return false;
    }

    function isMatchDrawn() {
        var value = positions.find(p => p == "")
        return value === "" ? false : true;
    }

    function updatePositions(boxNumber) {
        positions[boxNumber] = currentPlayer.Symbol;
    }

    function getCurrentPlayer() {
        return currentPlayer;
    }

    return {
        getCurrentPlayer: getCurrentPlayer,
        updatePositions: updatePositions,
        play: play
    }
})();

