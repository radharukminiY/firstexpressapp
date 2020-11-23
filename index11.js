const express=require("express");
const app=express();
const path=require('path');
//app.use((req, res) => {
//console.log('new request');
//res.send("hgvyhgfyhgy")
//})
app.set('view engine', 'ejs');

app.get('/', (req,res) =>
{
  res.render('home.ejs')
})
app.get('/', (req,res) =>
{
  res.render('home.ejs')
})
app.get('/nav', (req,res) =>
{
  res.render('nav.ejs')
})
app.get('/nani', (req,res) =>
{
  const nani=[
    'good','handsome','greedy','nice'
  ]
  res.render('nani.ejs', { nani })
})

app.get('/kittu', (req,res) =>
{
  const kittu=[
    'lazy','du-du','fatty','my bro'
  ]
  res.render('kittu.ejs', { kittu })
})

app.listen(8080, ()  =>{
console.log('port is working');
})
