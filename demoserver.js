const express = require('express');
const bodyparser =require(`body-parser`)
var http= require(`http`)
const router =express.Router()
const path = require('path');
const app = express();
const PORT = 3001;
const html = require(`./public/index.html`)
const notes= require(`./public/notes.html`)
const notetaker = require('./public/js/index.js');
// const { clog } = require('./middleware/clog');

// create server
http.createServer(function(req,res){
  res.write(`hello note taker`)
  res.end()
}).listen(3001);