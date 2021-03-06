const router = require("express").Router();

const controllers = require("../newcontroller");

// GET request
router.get("/notes", function (req, res) {
  controllers
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// POST request
router.post("/notes", (req, res) => {
  controllers
    .addNotes(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// Bonus - DELETE request
router.delete("/notes/:id", function (req, res) {
  controllers
    .deleteNotes(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
