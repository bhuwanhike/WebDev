let direction = { x: 0, y: 0 };
let foodSound = new Audio("/music/food.mp3");
let gameOverSound = new Audio("/music/gameover.mp3");
let moveSound = new Audio("/music/move.mp3");
let musicSound = new Audio("/music/music.mp3");
let board = document.querySelector(".board");
let speed = 10;
let lastPaintTime = 0;
let snakeArr = [{ x: 4, y: 5 }];
let foodArr = [{ x: 12, y: 12 }];
let gamescore = 0;
let highscore = localStorage.getItem("highscore");
let scoremax = 0;
if (highscore === null) {
  highScore.innerHTML = "Set a new high score";
} else {
  highScore.innerHTML = highscore;
}

function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}
function isCollide(snakearr) {
  for (let i = 1; i < snakearr.length; i++) {
    if (snakearr[0].x === snakearr[i].x && snakearr[0].y === snakearr[i].y) {
      return true;
    }
  }
  if (
    snakearr[0].x > 30 ||
    snakearr[0].x < 0 ||
    snakearr[0].y > 30 ||
    snakearr[0].y < 0
  ) {
    return true;
  }
}
function gameEngine() {
  // snake food collision
  if (snakeArr[0].x === foodArr[0].x && snakeArr[0].y === foodArr[0].y) {
    foodSound.play();
    gamescore++;

    score.innerHTML = gamescore;
    snakeArr.unshift({
      x: foodArr[0].x + direction.x,
      y: foodArr[0].y + direction.y,
    });
    foodArr.pop();
    foodArr.push({
      x: Math.floor(2 + Math.random() * 28),
      y: Math.floor(2 + Math.random() * 28),
    });
  }

  // snake collision

  if (isCollide(snakeArr)) {
    direction.x = 0;
    direction.y = 0;
    snakeArr = [{ x: 4, y: 5 }];

    gameOverSound.play();
    musicSound.pause();

    if (gamescore > scoremax) {
      scoremax = gamescore;
      localStorage.setItem("highscore", JSON.stringify(scoremax));
      highScore.innerHTML = scoremax; // Update to use scoremax instead of highscore
    }

    gamescore = 0;

    score.innerHTML = gamescore;
  }
  // Move the snake head based on direction
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }
  snakeArr[0].x += direction.x;
  snakeArr[0].y += direction.y;

  // Clear the board
  board.innerHTML = "";

  snakeArr.forEach((e, index) => {
    let snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index == 0) {
      snakeElement.style.background = "red";
      snakeElement.style.border = "2px solid black";
      snakeElement.style.borderRadius = "10px";
    } else {
      snakeElement.style.background = "green";
      snakeElement.style.border = "2px solid black";
      snakeElement.style.borderRadius = "10px";
    }

    board.appendChild(snakeElement);
  });
  foodArr.forEach((e) => {
    let foodElement = document.createElement("div");
    foodElement.style.gridRowStart = e.y;
    foodElement.style.gridColumnStart = e.x;

    foodElement.style.backgroundColor = "black";

    board.appendChild(foodElement);
  });
  document.addEventListener("keydown", (e) => {
    // moveSound.play();
    musicSound.play();
    if (e.key == "ArrowRight") {
      direction.x = 1;
      direction.y = 0;
      moveSound.play();
    }
    if (e.key == "ArrowLeft") {
      direction.x = -1;
      direction.y = 0;
      moveSound.play();
    }
    if (e.key == "ArrowUp") {
      direction.x = 0;
      direction.y = -1;
      moveSound.play();
    }
    if (e.key == "ArrowDown") {
      direction.x = 0;
      direction.y = 1;
      moveSound.play();
    }
  });
}

window.requestAnimationFrame(main);
