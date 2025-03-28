let generate = document.querySelector("button");
let input = document.querySelector(".input-text");
let copy = document.querySelector("img");
let str = "adefkvwxyz0456789!@#$%^()_+";
let pass = function shuffleString(str) {
  return str
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

generate.addEventListener("click", () => {
  input.innerHTML = pass(str);
});
copy.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(input.innerHTML);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
});
