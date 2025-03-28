let win = document.querySelector(".taskbar");
let menu = document.querySelector(".menu");
win.addEventListener("click", () => {
  if (menu.style.bottom == "60px") {
    menu.style.bottom = "-610px";
  } else {
    menu.style.bottom = "60px";
  }
});
