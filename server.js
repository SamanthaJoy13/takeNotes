require('dotenv').config();
const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(path.join('client')));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});