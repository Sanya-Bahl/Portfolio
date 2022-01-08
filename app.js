const express = require('express')
const app = express()
const path= require('path')
const port = 3000
const http=require('https')
app.use(express.static("Public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index");
})
app.get('/linkedin', (req,res)=>
{
  
    res.redirect('https://www.linkedin.com/in/sanya-bahl-1a66471a6/')
})
app.get('/github', (req,res)=>
{
  
    res.redirect('https://github.com/Sanya-Bahl')
})
app.get('/linkedin', (req,res)=>
{
  
    res.redirect('https://www.linkedin.com/in/sanya-bahl-1a66471a6/')
})
app.get('/education', (req, res) => {
  res.render("Education");
})
app.get('/skills', (req, res) => {
  res.render("skills");
})

app.get('/projects',(req,res)=>
{
  res.render('project')
})

app.listen(process.env.PORT||3000, () => {
  console.log(`Example app listening at 3000`)
})