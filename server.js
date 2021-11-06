const express = require('express');
const bodyparser =require(`body-parser`)
const router =express.Router.router()
const path = require('path');
const app = express();
const PORT = 3001;
const html = require(`./public/index.html`)
const notes= require(`./public/notes.html`)
const notetaker = require('./public/js/index.js');
// const { clog } = require('./middleware/clog');


// listen
app.listen(3001,()=>{
    console.log(`start on port 3001`)
})

// route the GET data

router.get(`./`,(req,res)=>{
    res.sendFile(html)
})

app.get(notes,(req,res)=>{
    res.json(html)
})


// handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/pets', (req, res) => res.json(petData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

// POST data on server

app.post(notes,(req,res)=>{
    res
})