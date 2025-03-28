let toasters = document.querySelector(".bars");
let buttons = document.querySelectorAll(".container button");

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    let div = document.createElement("div");
    if (e.innerHTML == "Success") {
      div.classList.add("success", "box");
      div.innerHTML = `<img src="success.svg" alt="" />Successfully Submitted!`;
    } else if (e.innerHTML == "Error") {
      div.classList.add("error", "box");
      div.innerHTML = `<img src="error.svg" alt="" />Please fix the error!`;
    } else {
      div.classList.add("invalid", "box");
      div.innerHTML = `<img src="invalid.svg" alt="" />Invalid input, check again!`;
    }
    toasters.appendChild(div);
    setTimeout(() => {
      toasters.removeChild(div);
    }, 6000);
  });
});
