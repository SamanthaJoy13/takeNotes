require('dotenv').config();
const express = require('express');
const path = require('path');


const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join('client')));


app.get('/public', (req, res) => 
res.sendFile(path.join(__dirname, 'client', 'index.html'))
);

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'client', 'notes.html'))
);


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});