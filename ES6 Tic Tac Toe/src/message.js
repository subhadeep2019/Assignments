class Message
{
    constructor(description,isShowInPopup)
    {
        this.description = description;
        this.isShowInPopup = isShowInPopup;
    }
    setMessage(game) {
        if (game.IsMatchDraw) {
            this.description = "Match is Draw"
            this.isShowInPopup = true;
        }
        if (game.IsMatchWon) {
            this.description = "Match is won by " + game.currentPlayer.Name + "(" + game.currentPlayer.Symbol + ")"
            this.isShowInPopup = true;
        }
        if (!game.IsMatchDraw && !game.IsMatchWon) {
            this.description = game.currentPlayer.Name + "'s turn"
            this.isShowInPopup = false;
        }
    }
}