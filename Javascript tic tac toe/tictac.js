//  var Player = function (name, symbol) {
//      this.Name = name;
//      this.Symbol = symbol;
//  }

// var player1 = new Player('Player 1', "X");
// var player2 = new Player('Player 2', "O");
// var currentPlayer = this.player1;
// var positions = ["","","","","","","","",""];
// var winningPositions = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]    
// ]

// function nextPlayer() {
//     if (currentPlayer === player1) {
//         currentPlayer = player2;
//     }
//     else {
//         currentPlayer = player1;
//     }    
// }

// function showMessage() {
//     var messages = document.getElementById('message');
//     messages.innerText = currentPlayer.Name + "'s turn";
// }

// function play()
// {
//     if(isThereAWinner())
//     {
//         alert("Winner is " + currentPlayer.Name);
//     }
//     if(isMatchDrawn())
//     {
//         alert("Match is drawn");
//     }
// }

// function isThereAWinner()
// {
//     for(i=0;i<winningPositions.length;i++)
//     {
//         if((positions[winningPositions[i][0]] === currentPlayer.Symbol)
//         && (positions[winningPositions[i][1]] === currentPlayer.Symbol)
//         && (positions[winningPositions[i][2]] === currentPlayer.Symbol))
//         {
//              return true;
//         }
//     }
//     return false;
// }

// function isMatchDrawn()
// {
//    var value = positions.find(p=>p == "")
//    return value === ""? false : true;
// }

// function updatePositions(boxNumber)
// {
//     positions[boxNumber] = currentPlayer.Symbol;
// }

// function onLoad() {
//     document.querySelectorAll('#tictac td').forEach(element => {
//         element.addEventListener('click', function (e) {
//             if (e.target.innerText == "") {
//                 e.target.innerText = currentPlayer.Symbol;
//                 updatePositions(e.target.getAttribute("BoxNumber"));
//                 play();
//                 nextPlayer();
//                 showMessage();
//             }
//         });
//     });

//     showMessage(currentPlayer.Name + "'s turn");
// }