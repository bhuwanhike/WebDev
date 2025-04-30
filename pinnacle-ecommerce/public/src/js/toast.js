let toaster = document.querySelector(".toast");

export const showToast = () => {
  let div = document.createElement("div");
  div.classList.add("success");
  div.innerHTML = `<img src="/assets/svgicon/success.svg" alt="" />Added successfully!`;

  toaster.appendChild(div);
  setTimeout(() => {
    toaster.removeChild(div);
  }, 2000);
};
export const showToastforDelete = () => {
  let div = document.createElement("div");
  div.classList.add("success");
  div.innerHTML = `<img src="/assets/svgicon/success.svg" alt="" />Item removed successfully!`;

  toaster.appendChild(div);
  setTimeout(() => {
    toaster.removeChild(div);
  }, 1000);
};
