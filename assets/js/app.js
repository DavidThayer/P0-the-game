console.log('app.js loaded')
// render game pieces
// render game canvas
// assign controls to each piece
// trigger game winner when one piece hits finish line




$(document).ready(function() { // all jQuery here

  function startGame() { // set up gameboard and pieces
    playerOnePiece = new component(30, 30, "red", 10, 120);
    playerTwoPiece = new component(30, 30, "blue", 40, 120);
    gameArea.start()
  }
  var gameArea = {
    canvas : document.createElement('canvas'),
    start : function () {
      this.canvas.width = 680;
      this.canvas.height = 480;
    }
  }



}) // all jQuery above this line
