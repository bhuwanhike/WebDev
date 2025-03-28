const url = "http://api.quotable.io/Random";
let content = document.querySelector("p");
let author = document.querySelector(".author");
let quote = document.querySelector(".button1");
let tweet = document.querySelector(".button2");
async function getQuote() {
  let quote = await fetch(url);
  let quotedata = await quote.json();

  content.innerHTML = `"${quotedata.content}"`;
  author.innerHTML = `<div></div>${quotedata.author}`;
  return quotedata;
}
getQuote();

quote.addEventListener("click", async () => {
  getQuote();
});

tweet.addEventListener("click", async () => {
  let text = await getQuote();
  window.open(`https://x.com/intent/tweet?text=${text.content}`);
});
