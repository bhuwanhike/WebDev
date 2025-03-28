const apiKey = "A0ui3PUkYW5nnX0z9IBz7unzq8alFOSM9Boj2kthFgY";

let searchimage = document.querySelector(".searchbox");
let imageres = document.querySelector(".main");
let more = document.querySelector(".loadmore");

let page = 1;

async function fetchimages(page, imagequery) {
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${imagequery}&client_id=${apiKey}&per_page=16`;

  let data = await fetch(url);
  let res = await data.json();
  for (let i = 0; i < res.results.length; i++) {
    let div = document.createElement("div");
    div.classList.add("unsplashimg");
    let imgtag = document.createElement("img");
    imgtag.src = res.results[i].urls.raw;
    imgtag.classList.add("imgr");
    div.appendChild(imgtag);
    imageres.appendChild(div);
  }
}
searchbutton.addEventListener("click", () => {
  let imagequery = searchimage.value;
  fetchimages(page, imagequery);
  setTimeout(() => {
    more.style.display = "inline-block";
  }, 5000);
});
more.addEventListener("click", () => {
  page++;
  let imagequery = searchimage.value;
  fetchimages(page, imagequery);
});
