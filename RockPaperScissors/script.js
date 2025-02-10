let rock = document.querySelector("#Rock");
let paper = document.querySelector("#Paper");
let sci = document.querySelector("#Scissors");
let you_score = document.querySelector(".you-score");
let comp_score = document.querySelector("#compdigit");
let button = document.getElementById("btn");
let i = 0;
let j = 0;
let rand = Math.random();
rock.addEventListener("click", () => {
  if (Math.random() < 1 / 3) {
    button.innerText = "It's a Rock. Draw!";
    button.style.backgroundColor = "#E40A91";
  } else if (Math.random() >= 1 / 3 && Math.random() < 2 / 3) {
    button.innerText = "It's a Paper. You lost!";
    comp_score.innerText = parseInt(j) + 1;
    j = comp_score.innerText;
    button.style.backgroundColor = "#FF0B0B";
  } else {
    button.innerText = "It's a scissors. Yow win!";
    you_score.innerText = parseInt(i) + 1;
    i = you_score.innerText;
    button.style.backgroundColor = "#CC8E3D";
  }
});
paper.addEventListener("click", () => {
  if (Math.random() < 1 / 3) {
    button.innerText = "It's a Rock. Yow win!";
    you_score.innerText = parseInt(i) + 1;
    i = you_score.innerText;
    button.style.backgroundColor = "#CC8E3D";
  } else if (Math.random() >= 1 / 3 && Math.random() < 2 / 3) {
    button.innerText = "It's a Paper. Draw!";
    button.style.backgroundColor = "#E40A91";
  } else {
    button.innerText = "It's a scissors. Yow lost!";
    comp_score.innerText = parseInt(j) + 1;
    j = comp_score.innerText;
    button.style.backgroundColor = "#FF0B0B";
  }
});
sci.addEventListener("click", () => {
  if (Math.random() < 1 / 3) {
    button.innerText = "It's a Rock. Yow lost!";
    comp_score.innerText = parseInt(j) + 1;
    j = comp_score.innerText;
    button.style.backgroundColor = "#FF0B0B";
  } else if (Math.random() >= 1 / 3 && Math.random() < 2 / 3) {
    button.innerText = "It's a Paper. You win!";
    you_score.innerText = parseInt(i) + 1;
    i = you_score.innerText;
    button.style.backgroundColor = "#CC8E3D";
  } else {
    button.innerText = "It's a scissors. Draw!";
    button.style.backgroundColor = "#E40A91";
  }
});


