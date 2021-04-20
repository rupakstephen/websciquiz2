// server init + mods
const express = require('express')
var app = express();
const path = require("path")

require('dotenv').config();
app.use(express.json());

app.use('/', express.static(path.join(__dirname,"/app/dist")));


empty = (req, res) => { };

// start server
app.listen(3000, function () {
  console.log('Server up on localhost:3000');
});
