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
    if (playerOneMoves < 10) {
      $('.player1').animate({left: '+=75px'}, 50);
      playerOneMoves++;
    } else {
      alert('Doggo wins!');
      reset();

    }

  } else if (event.keyCode === 191) {
      if (playerTwoMoves < 10) {
        $('.player2').animate({left: '+=75px'}, 50);
        playerTwoMoves++;
      } else {
        alert('Monkey Wins!');
        reset();
      }
    }
}

$('.btn-primary').on('click', reset);

  function reset(event) {
    $('.player1').animate({'right':'',
  'left': '0px'});
    $('.player2').animate({'right':'',
  'left': '0px'});
  playerOneMoves = 0;
  playerTwoMoves = 0;
  }

// keep count of player 1 press and player two press
// increment count for each keypress of player 1 and 2
// first to 20 alerts winner and stops default action



}) // all jQuery above this line
