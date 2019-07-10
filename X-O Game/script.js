
const container = document.getElementById('container'),
      numOfSquares = 9,
      startLetter = 'x',
      secondLetter = 'o',
      playAgainButton = document.getElementById('button'),
      gameDetails = document.getElementById('game-details')
      player1 = document.getElementById('game-details').querySelectorAll('p')[0],
      player2 = document.getElementById('game-details').querySelectorAll('p')[1],
      winnderDialog = document.getElementsByClassName('showwinner')[0];
var   ended = false,
      player1_wins = 0,
      player2_wins = 0;

function initializePlayerData() {
    player1.innerHTML = `player #1: <span id='player1'> ${startLetter} </span> &nbsp&nbsp- &nbsp&nbsp&nbsp&nbsp${localStorage.getItem('player1') > 0 ? localStorage.getItem('player1') : 0 }`;
    player2.innerHTML = `player #2: <span id='player2'> ${secondLetter} </span> &nbsp&nbsp- &nbsp&nbsp&nbsp&nbsp${localStorage.getItem('player2') > 0 ? localStorage.getItem('player2') : 0 }`;
}

    initializePlayerData();

    for(let i=1; i<=numOfSquares; i++) {
      let square = document.createElement('div');
      square.classList.add('sqr');
      square.setAttribute('index',i);
      container.appendChild(square);
    }

var allSquares = Array.from(container.querySelectorAll('.sqr')),
    numOfClicks = 0,
    clickIndex = 0;

// Create one dimensional array
var boxes = new Array(3);
// Loop to create 2D array using 1D array
for (var i = 0; i < boxes.length; i++) {
    boxes[i] = new Array(3);
}
// Loop to initilize 2D array elements.
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        boxes[i][j] = allSquares[j+3*i];
    }
}

    function setter(){
      let square = allSquares[clickIndex-1];
      if(numOfClicks%2 === 0){
        square.textContent = startLetter;
        square.classList.add(startLetter);
      }
      else {
        square.textContent = secondLetter;
        square.classList.add(secondLetter);
      }
    }

    playAgainButton.onclick = function() {
        for(let i=0; i<numOfSquares; i++) {
          allSquares[i].textContent = '';
          allSquares[i].style.cursor='pointer';
          let classArr = allSquares[i].classList;
          if(classArr.length > 1) {
            for(let j=classArr.length; j>0; j--){
               allSquares[i].classList.remove(classArr[j]);
            }
          }
        }
        winnderDialog.classList.remove('enabled');
        ended=false;
        numOfClicks = 0;
        clickIndex = 0;
    };

    function checkWinner(){
      // horizontal boxes probabilities
      if(boxes[0][0].textContent !== '' && boxes[0][0].textContent === boxes[0][1].textContent && boxes[0][0].textContent === boxes[0][2].textContent) {
        colorWinner(boxes[0][0],boxes[0][1],boxes[0][2]);
        if(boxes[0][0].textContent === startLetter){
          winnderDialog.textContent = "Player #1 is winner!"
          winnderDialog.classList.add('enabled');
          ended = true;
          let wins = parseInt(localStorage.getItem('player1'));
          player1_wins++;
          if(wins > 0) {
            localStorage.setItem('player1',wins+1);
          } else {
            localStorage.setItem('player1',player1_wins);
          }
          initializePlayerData();
        } else {
            winnderDialog.textContent = "Player #2 is winner!"
            winnderDialog.classList.add('enabled');
            ended = true;
            let wins = parseInt(localStorage.getItem('player2'));
            player2_wins++;
            if(wins > 0) {
              localStorage.setItem('player2',wins+1);
            } else
              localStorage.setItem('player2',player2_wins);
            initializePlayerData();
          }
        }
      if(boxes[1][0].textContent !== '' && boxes[1][0].textContent === boxes[1][1].textContent && boxes[1][0].textContent === boxes[1][2].textContent) {
        colorWinner(boxes[1][0],boxes[1][1],boxes[1][2]);
        if(boxes[1][0].textContent === startLetter){
          winnderDialog.textContent = "Player #1 is winner!"
          winnderDialog.classList.add('enabled');
          ended = true;
          let wins = parseInt(localStorage.getItem('player1'));
          player1_wins++;
          if(wins > 0) {
            localStorage.setItem('player1',wins+1);
          } else {
            localStorage.setItem('player1',player1_wins);
          }
          initializePlayerData();
        } else {
            winnderDialog.textContent = "Player #2 is winner!"
            winnderDialog.classList.add('enabled');
            ended = true;
            let wins = parseInt(localStorage.getItem('player2'));
            player2_wins++;
            if(wins > 0) {
              localStorage.setItem('player2',wins+1);
            } else
              localStorage.setItem('player2',player2_wins);
            initializePlayerData();
          }
      }
      if(boxes[2][0].textContent !== '' && boxes[2][0].textContent === boxes[2][1].textContent && boxes[2][0].textContent === boxes[2][2].textContent) {
        colorWinner(boxes[2][0],boxes[2][1],boxes[2][2]);
        if(boxes[2][0].textContent === startLetter){
          winnderDialog.textContent = "Player #1 is winner!"
          winnderDialog.classList.add('enabled');
          ended = true;
          let wins = parseInt(localStorage.getItem('player1'));
          player1_wins++;
          if(wins > 0) {
            localStorage.setItem('player1',wins+1);
          } else {
            localStorage.setItem('player1',player1_wins);
          }
          initializePlayerData();
        } else {
            winnderDialog.textContent = "Player #2 is winner!"
            winnderDialog.classList.add('enabled');
            ended = true;
            let wins = parseInt(localStorage.getItem('player2'));
            player2_wins++;
            if(wins > 0) {
              localStorage.setItem('player2',wins+1);
            } else
              localStorage.setItem('player2',player2_wins);
            initializePlayerData();
          }
      }
      // vertical boxes probabilities
      if(boxes[0][0].textContent !== '' && boxes[0][0].textContent === boxes[1][0].textContent && boxes[0][0].textContent === boxes[2][0].textContent) {
        colorWinner(boxes[0][0],boxes[1][0],boxes[2][0]);
        if(boxes[0][0].textContent === startLetter){
          winnderDialog.textContent = "Player #1 is winner!"
          winnderDialog.classList.add('enabled');
          ended = true;
          let wins = parseInt(localStorage.getItem('player1'));
          player1_wins++;
          if(wins > 0) {
            localStorage.setItem('player1',wins+1);
          } else {
            localStorage.setItem('player1',player1_wins);
          }
          initializePlayerData();
        } else {
            winnderDialog.textContent = "Player #2 is winner!"
            winnderDialog.classList.add('enabled');
            ended = true;
            let wins = parseInt(localStorage.getItem('player2'));
            player2_wins++;
            if(wins > 0) {
              localStorage.setItem('player2',wins+1);
            } else
              localStorage.setItem('player2',player2_wins);
            initializePlayerData();
          }
      }
      if(boxes[0][1].textContent !== '' && boxes[0][1].textContent === boxes[1][1].textContent && boxes[0][1].textContent === boxes[2][1].textContent) {
        colorWinner(boxes[0][1],boxes[1][1],boxes[2][1]);
        if(boxes[0][1].textContent === startLetter){
          winnderDialog.textContent = "Player #1 is winner!"
          winnderDialog.classList.add('enabled');
          ended = true;
          let wins = parseInt(localStorage.getItem('player1'));
          player1_wins++;
          if(wins > 0) {
            localStorage.setItem('player1',wins+1);
          } else {
            localStorage.setItem('player1',player1_wins);
          }
          initializePlayerData();
        } else {
            winnderDialog.textContent = "Player #2 is winner!"
            winnderDialog.classList.add('enabled');
            ended = true;
            let wins = parseInt(localStorage.getItem('player2'));
            player2_wins++;
            if(wins > 0) {
              localStorage.setItem('player2',wins+1);
            } else
              localStorage.setItem('player2',player2_wins);
            initializePlayerData();
          }
      }
      if(boxes[0][2].textContent !== '' && boxes[0][2].textContent === boxes[1][2].textContent && boxes[0][2].textContent === boxes[2][2].textContent) {
        colorWinner(boxes[0][2],boxes[1][2],boxes[2][2]);
        if(boxes[0][2].textContent === startLetter){
          winnderDialog.textContent = "Player #1 is winner!"
          winnderDialog.classList.add('enabled');
          ended = true;
          let wins = parseInt(localStorage.getItem('player1'));
          player1_wins++;
          if(wins > 0) {
            localStorage.setItem('player1',wins+1);
          } else {
            localStorage.setItem('player1',player1_wins);
          }
          initializePlayerData();
        } else {
            winnderDialog.textContent = "Player #2 is winner!"
            winnderDialog.classList.add('enabled');
            ended = true;
            let wins = parseInt(localStorage.getItem('player2'));
            player2_wins++;
            if(wins > 0) {
              localStorage.setItem('player2',wins+1);
            } else
              localStorage.setItem('player2',player2_wins);
            initializePlayerData();
          }
      }
      // diagonal boxes probabilities
      if(boxes[0][0].textContent !== '' && boxes[0][0].textContent === boxes[1][1].textContent && boxes[0][0].textContent === boxes[2][2].textContent) {
        colorWinner(boxes[0][0],boxes[1][1],boxes[2][2]);
        if(boxes[0][0].textContent === startLetter){
          winnderDialog.textContent = "Player #1 is winner!"
          winnderDialog.classList.add('enabled');
          ended = true;
          let wins = parseInt(localStorage.getItem('player1'));
          player1_wins++;
          if(wins > 0) {
            localStorage.setItem('player1',wins+1);
          } else {
            localStorage.setItem('player1',player1_wins);
          }
          initializePlayerData();
        } else {
            winnderDialog.textContent = "Player #2 is winner!"
            winnderDialog.classList.add('enabled');
            ended = true;
            let wins = parseInt(localStorage.getItem('player2'));
            player2_wins++;
            if(wins > 0) {
              localStorage.setItem('player2',wins+1);
            } else
              localStorage.setItem('player2',player2_wins);
            initializePlayerData();
          }
      }
      if(boxes[0][2].textContent !== '' && boxes[0][2].textContent === boxes[1][1].textContent && boxes[0][2].textContent === boxes[2][0].textContent) {
        colorWinner(boxes[0][2],boxes[1][1],boxes[2][0]);
        if(boxes[0][2].textContent === startLetter){
          winnderDialog.textContent = "Player #1 is winner!"
          winnderDialog.classList.add('enabled');
          ended = true;
          let wins = parseInt(localStorage.getItem('player1'));
          player1_wins++;
          if(wins > 0) {
            localStorage.setItem('player1',wins+1);
          } else {
            localStorage.setItem('player1',player1_wins);
          }
          initializePlayerData();
        } else {
            winnderDialog.textContent = "Player #2 is winner!"
            winnderDialog.classList.add('enabled');
            ended = true;
            let wins = parseInt(localStorage.getItem('player2'));
            player2_wins++;
            if(wins > 0) {
              localStorage.setItem('player2',wins+1);
            } else
              localStorage.setItem('player2',player2_wins);
            initializePlayerData();
          }
      }
    }

    function colorWinner(b1,b2,b3) {
      b1.classList.add('winner');
      b2.classList.add('winner');
      b3.classList.add('winner');
      for(let i=0; i<numOfSquares; i++){
        allSquares[i].style.cursor = 'no-drop';
        allSquares[i].classList.add('disabled');
      }
    }

for(let i=0; i<numOfSquares; i++) {
  let square = allSquares[i];
  square.onclick = function() {
      if(ended) {
        this.style.cursor = 'no-drop';
        return;
      }
      if(this.textContent === '') { // to avoid value changing
        clickIndex = parseInt(square.getAttribute('index'));
        setter();
        numOfClicks++;
        checkWinner();
      }
    }
  }
