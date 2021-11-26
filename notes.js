const fs = require('fs');

function getNotes() {
  try {
    const notesBuffer = fs.readFileSync('notes.json');
    return JSON.parse(notesBuffer.toString());
  } catch (err) {
    return [];
  }
}

function addNote(title, body) {
  const notes = getNotes();
  const titles = notes.map((note) => note.title);
  if (titles.includes(title)) {
    return;
  } 
  notes.push({ title, body });
  fs.writeFileSync('notes.json', JSON.stringify(notes))

}


function deleteNote(title) {
  const notes = getNotes();
  const clearedArr = notes.filter(note => note.title !== title)
  fs.writeFileSync('notes.json', JSON.stringify(clearedArr))
}

module.exports = {
  addNote,
  deleteNote
};

