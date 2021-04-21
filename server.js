// server init + mods
const express = require('express')
var app = express();
const path = require("path")
const https = require("https")
const cors = require("cors");

require('dotenv').config();
app.use(express.json());
app.use(cors())
app.use('/', express.static(path.join(__dirname,"/dist/")));


empty = (req, res) => { };

// start server
app.listen(3000, function () {
  console.log('Server up on localhost:3000');
});

app.get("/v1/getPokemon/:number", (req,res) => {
  pokeid = req.params.number;
  https.get(`https://pokeapi.co/api/v2/pokemon/${pokeid}/`, (resp) => {
        let data = '';
        
        resp.on('data', (stuff) => {
          data += stuff;
        })

        resp.on('end', () =>{
          data = JSON.parse(data);
          res.json(data);
        })
    }).on('error', (err) => {
        console.log(err);
    }).end();
})
