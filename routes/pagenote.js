var path = require("path");
const router = require("express").Router();
// Route will return the notes HTMl file from the public folder

router.get("/notes", (req, res) =>
  res.sendFile(path.join(`${__dirname}/../public`, "notes.html"))
);

router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

module.exports = router;
