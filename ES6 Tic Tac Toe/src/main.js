let isGameOver = false;
let game = new Game();
let message = new Message();

showMessage = (message, isShowInPopup = false) => {
    let messages = document.getElementById('message');
    messages.innerText = message;
    if (isShowInPopup) {
        alert(message);
    }
}

onLoad = () => {
    showMessage(`${game.currentPlayer.Name} 's turn`);

    document.querySelectorAll('#tictac td').forEach(element => {
        element.addEventListener('click', onCellClick);
    });
}

onCellClick = (event) => {
    if (event.target.innerText == "") {
        if (!game.IsMatchDraw && !game.IsMatchWon) {
            setPlayerSymbolInCell(event);
            game.startGame(event.target.getAttribute("BoxNumber"));
            displayMessage();
        }
    }
}

function displayMessage() {
    message.setMessage(game);
    showMessage(message.description, message.isShowInPopup);
}

function setPlayerSymbolInCell(event) {
    event.target.innerText = game.currentPlayer.Symbol;
}


