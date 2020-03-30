const express = require("express");
const app = express();
const port = process.env.PORT || 2000;

app.use(express.static("static"));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  let destination = fullUrl.replace("final", "");

  res.render("overview", { res: req.query, url: destination });
});

app.get("/save", (req, res) => {
  let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  let destination = fullUrl.replace("save", "");
  res.render("save", { url: destination });
});

app.get("/final", (req, res) => {
  let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  let destination = fullUrl.replace("final", "");

  res.render("final", { res: req.query, url: destination });
});

app.get("/confirm", (req, res) => {
  res.render("confirm");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
