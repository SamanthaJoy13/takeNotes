require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const notes = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
  });

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    console.log(req.body); 
    notes.push((req.body));
    fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2) , function (err) {
        if (err) throw err;
      });
    res.json(req.body);
});


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));