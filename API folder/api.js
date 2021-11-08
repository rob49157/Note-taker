const express = require(`express`)
const PORT= 3000
const termdata = require("/develop/public/notes.json")
const app= express()


app.get(`./`,(req,res)=> {
    // Get data from datatbase/json
    // and put in html
    
    res.send()
})

app.post('./', (req, res) => {
    // post data from database/json
    // get data from html
    // and put it database/json
})