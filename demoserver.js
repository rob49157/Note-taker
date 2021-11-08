const express = require('express');
const bodyparser =require(`body-parser`)
var http= require(`http`)
const router =express.Router()
const path = require('path');
const { json } = require('express');
const app = express();
const PORT = 3000;



// create server
http.createServer(function(req,res){
  res.write(`hello note taker`)
  res.end()
}).listen(3000);

app.use('/public', express.static('assets'))

// GET
router.get("/",function(req,res){
  res.sendFile(path.join(__dirname + "/develop/public/index.html"))
})

router.get("/notes", async function(req,res){
  res.sendFile(path.join(__dirname + "/develop/public/notes.html"))
})

router.get("/api/notes", async function(req, res) {
  const fs = require('fs')
  filepath = 'develop/db/de.json'
  jsonData = ''
  await fs.readFile(filepath, 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    }
    jsonData = JSON.parse(data); 
    res.send(jsonData)
  });
})

// router

app.use(`/`, router)
app.listen(PORT)
console.log('Server started at http://localhost:' + PORT)