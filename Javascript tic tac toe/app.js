var isGameOver = false;

function showMessage(message, isShowPopup = false) {
    var messages = document.getElementById('message');
    messages.innerText = message;
    if (isShowPopup) {
        alert(message);
    }
}

function setMessage(matchStatus, game) {
    if (matchStatus.IsMatchDraw) {
        showMessage("Match is Draw", true);
    }
    if (matchStatus.IsMatchWon) {
        showMessage("Match is won by " + game.getCurrentPlayer().Name + "(" + game.getCurrentPlayer().Symbol + ")", true);
    }
    if (!matchStatus.IsMatchDraw && !matchStatus.IsMatchWon) {
        showMessage(game.getCurrentPlayer().Name + "'s turn");
    }
}

function onLoad() {
    showMessage(game.getCurrentPlayer().Name + "'s turn");

    document.querySelectorAll('#tictac td').forEach(element => {
        element.addEventListener('click', function (e) {
            if (e.target.innerText == "") {
                if (!isGameOver) {
                    e.target.innerText = game.getCurrentPlayer().Symbol;
                    game.updatePositions(e.target.getAttribute("BoxNumber"));
                    var matchStatus = game.play();
                    if (matchStatus.IsMatchDraw || matchStatus.IsMatchWon) {
                        isGameOver = true;
                    }
                    setMessage(matchStatus, game);
                }
            }
        });
    });
}