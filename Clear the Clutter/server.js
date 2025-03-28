import path from "path";
import fs from "fs/promises";
import fsn from "fs";

let dirpath = "/home/bhuwan/Downloads/Backend";
let a = await fs.readdir(dirpath);

for (let i of a) {
  let ext = i.split(".")[i.split(".").length - 1];

  if (i.split(".").length > 1 && ext != "js" && ext != "json") {
    if (fsn.existsSync(path.join(dirpath, ext))) {
      fs.rename(path.join(dirpath, i), path.join(dirpath, ext, i));
    } else {
      fs.mkdir(ext, { recursive: true });
      fs.rename(path.join(dirpath, i), path.join(dirpath, ext, i));
    }
  }
}
