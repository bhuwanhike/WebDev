let calendar = document.getElementById("birthdate");
let calculate = document.querySelector("button");
let result = document.querySelector("p");

// console.log(calendar.value);
calculate.addEventListener("click", () => {
  let date = calendar.value.split("-")[2];
  let month = calendar.value.split("-")[1];
  let year = calendar.value.split("-")[0];
  let currentdate = new Date();
  let todayDate = currentdate.getDate();
  let todaymonth = currentdate.getMonth();
  let todayear = currentdate.getFullYear();
  let ageyear = todayear - year;
  let agemonth = todaymonth - month;
  let agedays = todayDate - date;
  if (todaymonth < month) {
    ageyear--;
    agemonth = 12 + todaymonth - month;
  }
  if (todayDate < date) {
    // agemonth--;
    agedays = getdatesinmonth(year, agemonth) - date + todayDate;
  }

  result.innerHTML = `Your age is ${ageyear} years, ${agemonth} months, ${agedays} days`;


  function getdatesinmonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
});
