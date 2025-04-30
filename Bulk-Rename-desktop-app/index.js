const fs = require("fs");
const replaceThis = "harry";
const replaceWith = "john";

const preview = false;

fs.readdir("data", (err, data) => {
  for (let i = 0; i < data.length; i++) {
    let newfile = "data/" + data[i].replaceAll(replaceThis, replaceWith);
    if (!preview) {
      fs.rename("data/" + data[i], newfile, () => {
        console.log("renamed");
      });
    } else {
      if ("data/" + data[i] !== newfile) {
        console.log("data/" + data[i] + " will be renamed to " + newfile);
      }
    }
  }
});
