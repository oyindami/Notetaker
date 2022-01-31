var path = require("path");
const app = require("express").Router();
// Route will return the notes HTMl file from the public folder

app.get("/notes", function (req, res) {
  res.sendFile(path.join(`${__dirname}/../public`, "notes.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(`${__dirname}/../public`, "index.html"));
});

module.exports = app;
