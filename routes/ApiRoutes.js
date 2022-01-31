// const notes = require("../db/db.json");
// const fs = require("fs");

// const { v4: uuidv4 } = require("uuid");
// const readDb = require("../db/db.json");
// const writeDb = require("../db/db.json");

// // Routes
// // root route returns index.html
// module.exports = function (app) {
//   // routes to return db.json file constaining notes
//   app.get("/api/notes", function (req, res) {
//     console.log("from server");
//     const db = readDb;
//     res.json(db);
//   });

//   // routes to return db.json file constaining notes
//   app.post("/api/notes", function (req, res) {
//     // generate unique id
//     const uuid = uuidv4();
//     // receive the new note from the webserver
//     const newNote = req.body;
//     //set uuid value
//     newNote.id = uuid;

//     // set variable to gather all data and seed it with data in the file
//     let db = readDb;

//     // append the newNote data to the variable with the file data
//     db.push(newNote);

//     // overwrite file
//     // calls function exported from file '../db/writeDbFile';
//     writeDb(db);

//     //return the data as JSON in the response
//     res.json(db);
//   });

//   // route to delete note (specific by id)
//   app.delete("/api/notes/:id", function (req, res) {
//     // read in the file containing the notes db
//     const db = readDb;
//     // get value of id from params
//     const deleteId = req.params.id;

//     for (let i = 0; i < db.length; i += 1) {
//       if (db[i].id === deleteId) {
//         // removes the i element from array
//         db.splice(i, 1);
//         // no need to contiue looking for element to delete
//         break;
//       }
//     }

//     //return the data as JSON in the response
//     res.json(db);
//   });
// };

const router = require("express").Router();

const helpers = require("../helpers");

// GET request
router.get("/notes", function (req, res) {
  helpers
    .retrieveNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// POST request
router.post("/notes", (req, res) => {
  helpers
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// Bonus - DELETE request
router.delete("/notes/:id", function (req, res) {
  helpers
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
