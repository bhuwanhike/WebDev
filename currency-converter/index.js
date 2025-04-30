let table = document.querySelector(".table");
let button = document.querySelector(".btn");
let inr = document.querySelector(".inr");
let usd = document.querySelector(".usd");
let eur = document.querySelector(".eur");
let money = document.querySelector(".money");
let curren = document.querySelector("#currency");

button.addEventListener("click", (e) => {
  e.preventDefault();
  getCurrency(curren.value);
});

async function getCurrency(currency) {
  let url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_eVE8UF5VXHN97gDOKDCPOSHDdju2ntatietSWxr3&base_currency=${currency}`;
  let data = await fetch(url);
  let res = await data.json();
  let datares = res.data;

  for (let key of Object.keys(datares)) {
    table.innerHTML += `

      <tr>
        <td>${datares[key].code}</td>
        <td>${datares[key].value}</td>
      </tr>

  `;
  }

  table.style.display = "block";
}
