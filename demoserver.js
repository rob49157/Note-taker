const express = require('express');
const bodyparser =require(`body-parser`)
var http= require(`http`)
const router =express.Router()
const path = require('path');
const { json } = require('express');
const app = express();
const PORT = process.env.PORT || 3000



// middleware 
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/static", express.static('./static/'));


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

// POST 
app.post("/api/notes",(req,res)=>{
  const fs = require('fs')
  writepath = 'develop/db/de.json'

  // Get all notes from de.json
  let all_notes = fs.readFileSync(writepath, 'utf8')
  let notes = JSON.parse(all_notes)
  // Create new json object for input data
  var title = req.body.title
  var text =req.body.text
  // !!!!!!!!!!Add an unique id generator to json "id": uniqueID
  let new_note = {
    "title":title,
    "text":text
  }
  // Put new object into old notes json and save it into file
  notes.push(new_note)
  all_notes = JSON.stringify(notes)
  fs.writeFileSync(writepath, all_notes, "utf-8")
  // console.log( 'Title:' +title+ 'Notes:'+ notes)
  // res.end('yes')
  // fs.appendFileSync(writepath,`${process.env[2]}`,(err)=> err ? console.log(err):console.log('commit log'))
})

// router

app.use(`/`, router)
app.listen(PORT)
console.log('Server started at http://localhost:' + PORT)