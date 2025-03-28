const express = require("express");
var axios = require("axios").default;
const path = require("path");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/searchword", (req, res) => {
  // res.send("Hello world!");

  var options = {
    method: "GET",
    url: "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary",
    params: { word: req.query.word },
    headers: {
      "x-rapidapi-key\n": "219edb2242mshb1933539b9760ebp1316c7jsn9edd776d7e43",
      "x-rapidapi-host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
      // console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  // let response = {};
  // response.data = {
  //   definition:
  //     "1. A peddler or hawker, especially of cheap, flashy articles, as sham jewelry; hence, a sham or cheat. [Slang, Eng.] Halliwell. 2. A stupid, awkward, inefficient person.[Slang]",
  //   word: "duffer",
  //   valid: true,
  // };
  // console.log(response.data);
  // res.json(response.data);
  // console.log("hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
