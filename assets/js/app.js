console.log('app.js loaded')
// render game pieces
// assign controls to each piece
// listen for keydown to move pieces
// trigger game winner when one piece hits finish line




$(document).ready(function() { // all jQuery here

var playerOnePiece = $('.player1');
var playerTwoPiece = $('.player2');

var playerOneMoves = 0;
var playerTwoMoves = 0;

$(document).on('keydown', moveRight);

function moveRight(event) {
  if (event.keyCode === 90) {
    if (playerOneMoves < 15) {
      $('.player1').animate({left: '+=50px'}, 100);
      playerOneMoves++;
    } else {
      alert('Player one wins!')

    }

  } else if (event.keyCode === 191) {
      if (playerTwoMoves < 15) {
        $('.player2').animate({left: '+=50px'}, 100);
        playerTwoMoves++;
      } else {
        alert('Player two Wins!')

      }
  }
}

// keep count of player 1 press and player two press
// increment count for each keypress of player 1 and 2
// first to 20 alerts winner and stops default action



}) // all jQuery above this line
