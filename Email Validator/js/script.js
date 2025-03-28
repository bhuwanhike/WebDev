// let example = {
//   email: "support@emailvalidation.io",
//   user: "support",
//   tag: "",
//   domain: "emailvalidation.io",
//   smtp_check: true,
//   mx_found: true,
//   did_you_mean: "",
//   role: true,
//   disposable: false,
//   score: 0.64,
//   state: "deliverable",
//   reason: "valid_mailbox",
//   free: false,
//   format_valid: true,
//   catch_all: null,
// };

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  resultCont.innerHTML = `<img src="/img/loader.svg" alt="" id="load" />`;

  let key = "ema_live_LMJ95Sbv1BROWNjgraWlmr9uOZgah7cg2ZpgD8Xi";
  let email = document.getElementById("username").value;
  email.reset;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let response = await res.json();

  let str = ``;
  for (key of Object.keys(response)) {
    if (response[key] != "" && response[key] != " ") {
      str += `<div>${key}:${response[key]}</div>`;
    }
  }
  resultCont.innerHTML = str;
});
