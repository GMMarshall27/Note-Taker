const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../fsUtils');

notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { title, text} = req.body;
  
    if (req.body) {
      const newNotes = {
        title,
        text,
        id: uuidv4(),
      };
  
      readAndAppend(newTip, './db/notes.json');
      res.json(`Notes added successfully 🚀`);
    } else {
      res.error('Error in adding tip');
    }
  });
  
  module.exports = notes;
  