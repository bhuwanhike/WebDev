let dino = document.querySelector("#dino");
let dragon = document.querySelector("#dragon");
let greet = document.querySelector(".greet");
let score = document.querySelector("#score");
let sound = document.createElement("audio");
sound.setAttribute("src", "/assets/music.mp3");
loop = true;
sound.play();

dino.style.left = "40px";
dino.style.bottom = "0px";
dragon.style.left = "80vw";
dino.style.bottom = "0px";
let count = 0;
var point = true;

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    dino.classList.add("bounce-animation");

    setTimeout(() => {
      dino.classList.remove("bounce-animation");
    }, 2000);
  }
  if (e.key == "ArrowRight") {
    dino.style.left = parseInt(dino.style.left) + 30 + "px";
  }

  if (e.key == "ArrowLeft") {
    dino.style.left = parseInt(dino.style.left) - 30 + "px";
  }
});
setInterval(() => {
  let dx = dino.offsetLeft;
  let dy = dino.getBoundingClientRect().top;
  let obsx = dragon.getBoundingClientRect().left;
  let obsy = dragon.getBoundingClientRect().top;
  let offsetx = Math.abs(dx - obsx);
  let offsety = Math.abs(dy - obsy);
  if (offsetx <= 203.5 && offsety <= 34) {
    dragon.classList.remove("dragonmotion");
    greet.innerHTML = "Game Over";
    over = new Audio("/assets/gameover.mp3");
    over.play();
    setTimeout(() => {
      over.pause();
      sound.pause();
    }, 1000);
  } else if (point && offsetx < 34) {
    count += 1;
    score.innerHTML = count;
    point = false;
    setTimeout(() => {
      point = true;
    }, 1000);
    setTimeout(() => {
      anidur = parseFloat(
        window
          .getComputedStyle(dragon, null)
          .getPropertyValue("animation-duration")
      );

      dragon.style.animationDuration = anidur - 0.3 + "s";
    }, 500);
  }
}, 100);
