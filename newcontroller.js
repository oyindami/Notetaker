const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid"); //installed package in JSON file

const readNotes = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

// rewrite function to export each individual function to be used in API routes
// also made changes to naming convention//

function write(note) {
  return writeNote("db/db.json", JSON.stringify(note));
}
//where the input will be written to in the database//

function read() {
  return readNotes("db/db.json", "utf8");
}

function getNotes() {
  return this.read().then((notes) => {
    let parsedNotes;
    try {
      parsedNotes = [].concat(JSON.parse(notes));
    } catch (err) {
      parsedNotes = [];
    }
    return parsedNotes;
  });
}

function addNotes(note) {
  const { title, text } = note;
  if (!title || !text) {
    throw new Error("Cannot have blank title");
  }
  // Use UUID package to add unique IDs
  const newNote = { title, text, id: uuidv4() };

  // Retrieve Notes, add the new note, update notes
  return this.getNotes()
    .then((notes) => [...notes, newNote])
    .then((updatedNotes) => this.write(updatedNotes))
    .then(() => newNote);
}

// bonus in README to delete the note function
function deleteNotes(id) {
  return this.getNotes()
    .then((notes) => notes.filter((note) => note.id !== id))
    .then((filteredNotes) => this.write(filteredNotes));
}

module.exports = {
  write,
  read,
  getNotes,
  addNotes,
  deleteNotes,
};
