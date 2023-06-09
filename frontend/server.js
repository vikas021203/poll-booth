const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config({
    path: './.env'
});
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server is listening at the ${port}`));