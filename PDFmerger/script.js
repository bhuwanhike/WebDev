const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { mergefun } = require("./testpdf.js");
app.use(express.static("public"));
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/merge", upload.array("pdfs", 2), async (req, res) => {
  // console.log(req.files);
  console.log(req.files);
  let d = await mergefun(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect(`http://localhost:3000/${d}.pdf`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
