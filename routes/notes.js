const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../fsUtils');
// GET route for retrieving all the notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
//allows the delete button to delete saved notes
notes.delete('/:id', (req, res) => {
    const notesId = req.params.id;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        // Make a new array of all notes except the one with the ID provided in the URL
        const result = json.filter((notes) => notes.id !== notesId);
  
        // Save that array to the filesystem
        writeToFile('./db/db.json', result);
  
        // Respond to the DELETE request
        res.json(`Item ${notesId} has been deleted 🗑️`);
      });
  });
  
//POST Route for a new UX/UI note
notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { title, text} = req.body;
  
    if (req.body) {
      const newNotes = {
        title,
        text,
        id: uuidv4(),
      };
  
      readAndAppend(newNotes, './db/db.json');
      res.json(`Notes added successfully 🚀`);
    } else {
      res.error('Error in adding notes');
    }
  });
  
  module.exports = notes;
  