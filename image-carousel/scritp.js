let caros = document.querySelector(".carousel");

let back = document.querySelector(".back");
let next = document.querySelector(".next");

caros.addEventListener("wheel", (e) => {
  e.preventDefault();
  caros.scrollLeft += e.deltaY;
  caros.style.scrollBehavior = "auto";
});
back.addEventListener("click", () => {
  caros.style.scrollBehavior = "smooth";
  caros.scrollLeft -= 300;
});
next.addEventListener("click", () => {
  caros.style.scrollBehavior = "smooth";
  caros.scrollLeft += 300;
});
