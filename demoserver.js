const express = require('express');
const bodyparser =require(`body-parser`)
var http= require(`http`)
const router =express.Router()
const path = require('path');
const app = express();
const PORT = 3000;
// const html = require("/a")
// const notes= require(`notes.html`)
// const notetaker = require('./assets/js/index.js');
// const { clog } = require('./middleware/clog');

// create server
http.createServer(function(req,res){
  res.write(`hello note taker`)
  res.end()
}).listen(3001);


// GET
router.get("/",function(req,res){
  res.sendFile(path.join(__dirname + "/develop/public/index.html"))
})

router.get("/notes", function(req,res){
  res.sendFile(path.join(__dirname + "/develop/public/notes.html"))
})

// router

app.use(`/`, router)
app.listen(PORT)
console.log('Server started at http://localhost:' + PORT)