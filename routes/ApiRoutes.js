const router = require("express").Router();

const controllers = require("../controllers");

// GET request
router.get("/notes", function (req, res) {
  controllers
    .retrieveNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// POST request
router.post("/notes", (req, res) => {
  controllers
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// Bonus - DELETE request
router.delete("/notes/:id", function (req, res) {
  controllers
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
