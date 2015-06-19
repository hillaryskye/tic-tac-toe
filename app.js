var box1 = document.getElementById('box1'),
    box2 = document.getElementById('box2'),
    box3 = document.getElementById('box3'),
    box4 = document.getElementById('box4'),
    box5 = document.getElementById('box5'),
    box6 = document.getElementById('box6'),
    box7 = document.getElementById('box7'),
    box8 = document.getElementById('box8'),
    box9 = document.getElementById('box9'),
    header = document.getElementById('header'),
    button = document.getElementById('button'),
    score = document.getElementById('score'),
    isPlay = false, // Starting out to play
    twice = false, // Makes sure player does not go twice
    counter = 0,
    counterO = 0,
    counterX = 0;
    scoreX = 0;
    scoreO = 0;

box1.addEventListener('click', function() {
  if (counter % 2 === 0) { // if twice is false, player can play
    value = 'X';
    twice = true;
    counterX++;
    console.log('counterX: ' + counterX)

  } // End of isPlay if
  else if (counter % 2 !== 0) { // if twice is true, player cannot play twice
    value = 'O';
    twice = true;
    counterO++;
    console.log('counterO: ' + counterO)
  } // End of isPlay else
  box1.innerHTML = value;
  counter++;
  console.log(counter);
  win();
})
box2.addEventListener('click', function() {
  if (counter % 2 === 0) { // if twice is false, player can play
    value = 'X';
    twice = true;
    counterX++;
    console.log('counterX: ' + counterX)

  } // End of isPlay if
  else if (counter % 2 !== 0) { // if twice is true, player cannot play twice
    value = 'O';
    twice = true;
    counterO++;
    console.log('counterO: ' + counterO)
  } // End of isPlay else
  box2.innerHTML = value;
  counter++;
  console.log(counter);
  win();
}) // End of EventListener box1
box3.addEventListener('click', function() {
  if (counter % 2 === 0) { // if twice is false, player can play
    value = 'X';
    twice = true;
    counterX++;
    console.log('counterX: ' + counterX)

  } // End of isPlay if
  else if (counter % 2 !== 0) { // if twice is true, player cannot play twice
    value = 'O';
    twice = true;
    counterO++;
    console.log('counterO: ' + counterO)
  } // End of isPlay else
  box3.innerHTML = value;
  counter++;
  console.log(counter);
  win();
}) // End of EventListener box1
box4.addEventListener('click', function() {
  if (counter % 2 === 0) { // if twice is false, player can play
    value = 'X';
    twice = true;
    counterX++;
    console.log('counterX: ' + counterX)

  } // End of isPlay if
  else if (counter % 2 !== 0) { // if twice is true, player cannot play twice
    value = 'O';
    twice = true;
    counterO++;
    console.log('counterO: ' + counterO)
  } // End of isPlay else
  box4.innerHTML = value;
  counter++;
  console.log(counter);
  win();
}) // End of EventListener box1
box5.addEventListener('click', function() {
  if (counter % 2 === 0) { // if twice is false, player can play
    value = 'X';
    twice = true;
    counterX++;
    console.log('counterX: ' + counterX)

  } // End of isPlay if
  else if (counter % 2 !== 0) { // if twice is true, player cannot play twice
    value = 'O';
    twice = true;
    counterO++;
    console.log('counterO: ' + counterO)
  } // End of isPlay else
  box5.innerHTML = value;
  counter++;
  console.log(counter);
  win();
}) // End of EventListener box1
box6.addEventListener('click', function() {
  if (counter % 2 === 0) { // if twice is false, player can play
    value = 'X';
    twice = true;
    counterX++;
    console.log('counterX: ' + counterX)

  } // End of isPlay if
  else if (counter % 2 !== 0) { // if twice is true, player cannot play twice
    value = 'O';
    twice = true;
    counterO++;
    console.log('counterO: ' + counterO)
  } // End of isPlay else
  box6.innerHTML = value;
  counter++;
  console.log(counter);
  win();
}) // End of EventListener box1
box7.addEventListener('click', function() {
  if (counter % 2 === 0) { // if twice is false, player can play
    value = 'X';
    twice = true;
    counterX++;
    console.log('counterX: ' + counterX)

  } // End of isPlay if
  else if (counter % 2 !== 0) { // if twice is true, player cannot play twice
    value = 'O';
    twice = true;
    counterO++;
    console.log('counterO: ' + counterO)
  } // End of isPlay else
  box7.innerHTML = value;
  counter++;
  console.log(counter);
  win();
}) // End of EventListener box1
box8.addEventListener('click', function() {
  if (counter % 2 === 0) { // if twice is false, player can play
    value = 'X';
    twice = true;
    counterX++;
    console.log('counterX: ' + counterX)

  } // End of isPlay if
  else if (counter % 2 !== 0) { // if twice is true, player cannot play twice
    value = 'O';
    twice = true;
    counterO++;
    console.log('counterO: ' + counterO)
  } // End of isPlay else
  box8.innerHTML = value;
  counter++;
  console.log(counter);
  win();
}) // End of EventListener box1
box9.addEventListener('click', function() {
  if (counter % 2 === 0) { // if twice is false, player can play
    value = 'X';
    twice = true;
    counterX++;
    console.log('counterX: ' + counterX)

  } // End of isPlay if
  else if (counter % 2 !== 0) { // if twice is true, player cannot play twice
    value = 'O';
    twice = true;
    counterO++;
    console.log('counterO: ' + counterO)
  } // End of isPlay else
  box9.innerHTML = value;
  counter++;
  console.log(counter);
  win();
}) // End of EventListener box1

addScore = function() {
  if (counterO > counterX) {
    scoreO++;
  }
  else if (counterX > counterO) {
    scoreX++;
  }
  score.classList.add('score');
  score.innerHTML = 'X has score: ' + scoreX + '<br>' + 'O has score: ' + scoreO;
  counter0 = 0;
  counterX = 0;
};

var reset = function() {
  button.addEventListener('click', function() {
    box1.innerHTML = '';
    box2.innerHTML = '';
    box3.innerHTML = '';
    box4.innerHTML = '';
    box5.innerHTML = '';
    box6.innerHTML = '';
    box7.innerHTML = '';
    box8.innerHTML = '';
    box9.innerHTML = '';
    header.innerHTML = 'Click a box to play!';
    addScore();
  })
  // buttonRemove();
}
var win = function() {
  var boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  var box1X = boxArray[0].innerHTML === 'X',
      box1O = boxArray[0].innerHTML === 'O',
      box2X = boxArray[1].innerHTML === 'X',
      box2O = boxArray[1].innerHTML === 'O',
      box3X = boxArray[2].innerHTML === 'X',
      box3O = boxArray[2].innerHTML === 'O',
      box4X = boxArray[3].innerHTML === 'X',
      box4O = boxArray[3].innerHTML === 'O',
      box5X = boxArray[4].innerHTML === 'X',
      box5O = boxArray[4].innerHTML === 'O',
      box6X = boxArray[5].innerHTML === 'X',
      box6O = boxArray[5].innerHTML === 'O',
      box7X = boxArray[6].innerHTML === 'X',
      box7O = boxArray[6].innerHTML === 'O',
      box8X = boxArray[7].innerHTML === 'X',
      box8O = boxArray[7].innerHTML === 'O',
      box9X = boxArray[8].innerHTML === 'X',
      box9O = boxArray[8].innerHTML === 'O';

  if ((box1X && box2X && box3X) || (box1O && box2O && box3O)) {
    header.innerHTML = 'We have a winner!';
    addButton();
  }
  else if ((box4X && box5X && box6X) || (box4O && box5O && box6O)) {
    header.innerHTML = 'We have a winner!';
    addButton();
  }
  else if ((box7X && box8X && box9X) || (box7O && box8O && box9O)) {
    header.innerHTML = 'We have a winner!';
    addButton();
  }
  else if ((box1X && box4X && box7X) || (box1O && box4O && box7O)) {
    header.innerHTML = 'We have a winner!';
    addButton();
  }
  else if ((box2X && box5X && box8X) || (box2O && box5O && box8O)) {
    header.innerHTML = 'We have a winner!';
    addButton();
  }
  else if ((box3X && box6X && box9X) || (box3O && box6O && box9O)) {
    header.innerHTML = 'We have a winner!';
    addButton();
  }
  else if ((box1X && box5X && box9X) || (box1O && box5O && box9O)) {
    header.innerHTML = 'We have a winner!';
    addButton();
  }
  else if ((box3X && box5X && box7X) || (box3O && box5O && box7O)) {
    header.innerHTML = 'We have a winner!';
    addButton();
  }
  else if ((counterO === 4 && counterX === 5) || (counterO === 5 && counterX === 4)) {
    header.innerHTML = 'The game is a draw!'
    addButton();
  }
  reset();
};
  var buttonRemove = function() {
    button.classList.remove('button');
    button.innerHTML = '';
};
var addButton = function() {
  button.classList.add('button');
  button.innerHTML = 'Click to play again?';
};
