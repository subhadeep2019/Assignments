var Player = function (name, symbol) {
    this.Name = name;
    this.Symbol = symbol;
}

var MatchStatus = function(isMatchDraw,isMatchWon)
{
    this.IsMatchDraw = isMatchDraw;
    this.IsMatchWon = isMatchWon;
}