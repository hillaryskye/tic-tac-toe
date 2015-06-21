var board = document.getElementById('board'),
    boxes = document.getElementsByClassName('boxes'),
    header = document.getElementById('header'),
    button = document.getElementById('button'),
    score = document.getElementById('score'),
    counter = 0,
    scoreX = 0,
    scoreO = 0;

var winning = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

var ticTacToe = {
  player: 'X'
}

var player1 = {player: 'X'}
var player2 = {player: 'O'}

function Reset () {
  player1 = {player: 'X'}
  player2 = {player: 'O'}
  for (var i = 0; i < 9; i++) {
    boxes[i].innerHTML = ''
    console.log('boxes length ' + boxes.length)
    counter = 0
  }
}
addScore = function() {
  score.classList.add('score');
  score.innerHTML = 'X has score: ' + scoreX + '<br>' + 'O has score: ' + scoreO;
  console.log('scoreX ' + scoreX)
  console.log('scoreO ' + scoreO)
  }
var addButton = function() {
  button.classList.add('button');
  button.innerHTML = 'Click to play again?';
  // board.addEventListener('click', Reset())
  }

var checkWinner = function (obj) {
  winning.forEach(function (el) {
    var counter1 = 0
    console.log('counter1 ' + counter1)
    el.forEach(function (el) {
      if (obj.hasOwnProperty(el)) {
        counter1++
        console.log('counter inside checkwinner ' + counter)
        console.log('counter1 ' + counter1)
        if (counter1 === 3) {
          // header.innerHTML = obj['game.player'] + ' is a winner!'
          alert(obj['player'] + ' wins!')
          // board.addEventListener('click', addScore())
          board.addEventListener('click', Reset())
          // score.addEventListener('click', addScore())
        } else if (counter === 9) {
          // header.innerHTML = 'The game is a draw!'
          alert('The game is a draw!')
          board.addEventListener('click', Reset())
          }
        }
      })
    })
  }

board.addEventListener('click', function (e) {
  if (e.target.dataset.id) {
    if (ticTacToe.player === 'X' && e.target.innerHTML.length === 0) {
      counter++
      player1[e.target.dataset.id] = ticTacToe.player
      e.target.innerHTML = ticTacToe.player
      checkWinner(player1)
      ticTacToe.player = 'O'
      scoreX++

    } else if (ticTacToe.player === 'O' && e.target.innerHTML.length === 0) {
      counter++
      player2[e.target.dataset.id] = ticTacToe.player
      e.target.innerHTML = '<span>' + ticTacToe.player + '</span>'
      checkWinner(player2)
      ticTacToe.player = 'X'
      scoreO++
    }
    console.log('counter ' + counter)
  }
})
