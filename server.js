const express = require("express");
const app = express();
const port = process.env.PORT || 2000;
// const paintingData = require("./modules/api");

app.use(express.static("static"));

app.set("view engine", "ejs");
app.set("views", "views");

console.log("test");

app.get("/", (req, res) => {
  console.log(req.query);
  res.render("overview", { res: req.query });
});

app.get("/save", (req, res) => {
  let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  let destination = fullUrl.replace("save", "");
  res.render("save", { url: destination });
});

app.get("/final", (req, res) => {
  res.render("final", { res: req.query });
});

app.get("/confirm", (req, res) => {
  res.render("confirm");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
