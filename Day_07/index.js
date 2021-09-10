const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Method GET");
});

app.post("/", (req, res) => {
  res.send("Method POST");
});

app.put("/", (req, res) => {
  res.send("Method PUT");
});

app.delete("/", (req, res) => {
  res.send("Method DELETE");
});

app.get("/query", (req, res) => {
  res.send(req.query);
});

app.get("/status", (req, res) => {
  res.sendStatus(parseInt(req.query.code));
});

app.listen(5000);
