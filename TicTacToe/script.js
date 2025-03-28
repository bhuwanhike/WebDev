let box = document.querySelectorAll(".box");
let reset = document.querySelector(".ctrl-btn");
let winner = document.querySelector(".winner");
let newgame = document.querySelector("#btn2");
let gameOver = false;
let turn = "X";
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

box.forEach((b) => {
  b.addEventListener("click", () => {
    if (turn === "X") {
      b.innerText = "X";
      turn = "O";
    } else {
      b.innerText = "O";
      turn = "X";
    }
    b.disabled = true;
    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattern of win) {
    let pos1 = box[pattern[0]].innerText;
    let pos2 = box[pattern[1]].innerText;
    let pos3 = box[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === "X" && pos2 == "X" && pos3 === "X") {
        terminate();
        winner.innerText = `Winner: ${pos1}`;
        gameOver = true;
        winner.classList.remove("show");
      } else if (pos1 === "O" && pos2 == "O" && pos3 === "O") {
        terminate();
        winner.innerText += " O";
        gameOver = true;
        winner.classList.remove("show");
      }
    }
  }
};

const terminate = () => {
  box.forEach((b) => {
    b.disabled = true;
  });
};

reset.addEventListener("click", () => {
  box.forEach((b) => {
    b.innerText = "";
    winner.innerText = `Winner: ${""}`;
    b.disabled = false;
    winner.classList.add("show");
  });
});

newgame.addEventListener("click", () => {
  if (gameOver) {
    box.forEach((b) => {
      b.innerText = "";
      winner.innerText = `Winner: ${""}`;
      b.disabled = false;
      gameOver = false;
      winner.classList.add("show");
    });
  }
});
