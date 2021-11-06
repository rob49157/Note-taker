const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const html = require(`./public/index.html`)
// const { clog } = require('./middleware/clog');
// const notetaker = require('./public/js/index.js');


// fetch respond form website.GET

app.get(html,(req,res)=>{
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

app.post(html,(req,res)=>{
    res
})