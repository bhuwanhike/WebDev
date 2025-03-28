const deletepassword = (website) => {
  let data = JSON.parse(localStorage.getItem("passwords"));
  let updatedarr = data.filter((e) => {
    return e.website != website;
  });
  localStorage.setItem("passwords", JSON.stringify(updatedarr));
  norefresh();
};
const copy = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {})
    .catch((err) => {});
};
const maskpassword = (pass) => {
  let str = "";
  for (let i = 0; i < pass.length; i++) {
    str += "*";
  }
  return str;
};

const norefresh = () => {
  let data = JSON.parse(localStorage.getItem("passwords"));
  let tb = document.querySelector("table");
  if (data == null) {
    tb.innerHTML = "No data found";
  } else {
    tb.innerHTML = `<tr>
          <th>Website</th>
          <th>Username</th>
          <th>Password</th>
          <th>Delete</th>
        </tr>`;
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].website != "" &&
        data[i].username != "" &&
        data[i].password != ""
      ) {
        let str = `<tr>
        <td>${data[i].website} <img onclick= "copy('${
          data[i].website
        }')" src="copy.svg" /></td>
        <td>${data[i].username} <img onclick= "copy('${
          data[i].username
        }')" src="copy.svg" /></td>
        <td>${maskpassword(data[i].password)} <img onclick= "copy('${
          data[i].password
        }')" src="copy.svg" /></td>
    
        <td><img onclick= "deletepassword('${
          data[i].website
        }')" src="dlt.svg" /></td>
        </tr>`;
        tb.innerHTML += str;
      }
    }
  }
};
norefresh();

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  let passwords = localStorage.getItem("passwords");
  if (passwords == null) {
    let json = [];
    if (website.value != "" && username.value != "" && password.value != "") {
      json.push({
        website: website.value,
        username: username.value,
        password: password.value,
      });
    }

    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    if (website.value != "" && username.value != "" && password.value != "") {
      json.push({
        website: website.value,
        username: username.value,
        password: password.value,
      });
    }

    localStorage.setItem("passwords", JSON.stringify(json));
  }
  norefresh();
  deletepassword();
  document.querySelector("form").reset();
});
