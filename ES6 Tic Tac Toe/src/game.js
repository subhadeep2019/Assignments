class Game {
    constructor() {
        this._player1 = new Player('Player 1', "X");
        this._player2 = new Player('Player 2', "O");
        this._winningPositions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.positions = ["", "", "", "", "", "", "", "", ""];
        this.currentPlayer = this._player1;
        this.IsMatchWon = false;
        this.IsMatchDraw = false;
    }

    setNextPlayer = () => {
        if (this.currentPlayer === this._player1) {
            this.currentPlayer = this._player2;
        }
        else {
            this.currentPlayer = this._player1;
        }
    }

    play = () => {
        if (this.isThereAWinner()) {
            this.IsMatchWon = true;        
        }
        else if (this.isMatchDrawn()) {
            this.IsMatchDraw = true;
        }
        else {
            this.setNextPlayer();
        }        
    }

    isThereAWinner = () => {
        for (let i = 0; i < this._winningPositions.length; i++) {
            if ((this.positions[this._winningPositions[i][0]] === this.currentPlayer.Symbol)
                && (this.positions[this._winningPositions[i][1]] === this.currentPlayer.Symbol)
                && (this.positions[this._winningPositions[i][2]] === this.currentPlayer.Symbol)) {
                return true;
            }
        }
        return false;
    }

    isMatchDrawn = () => {
        let value = this.positions.find(p => p == "")
        return value === "" ? false : true;
    }

    updatePositions = (boxNumber) => {
        this.positions[boxNumber] = this.currentPlayer.Symbol;
    }    

    startGame = (cellNumber) => {
        this.updatePositions(cellNumber);
        this.play();
    }
    
}

