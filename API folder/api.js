const express = require(`express`)
const PORT= 3000
const termdata = require("/develop/public/notes.json")
const app= express()


app.get(`./`,(req,res)=> res.send())