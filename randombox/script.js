let b = document.querySelectorAll(".box");

let obj2 = {
  1: "green",
  2: "yellow",
  3: "red",
  4: "pink",
  5: "blue",
};

Array.from(b).forEach((e) => {
  e.style.backgroundColor = obj2[Math.floor(Math.random() * 5) + 1];
});
