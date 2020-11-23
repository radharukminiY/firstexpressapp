const express=require("express");
const app=express();
const path = require('path');
const {v4:uuid } =require('uuid');

app.use(express.urlencoded({ extended:true}))
app.use(express.json())
//app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

let comments=[
{
 id: uuid(),
  username:'Todd',
  comment:'lol that is so funny'},
  {
    id: uuid(),
    username:'Bodd',
    comment:'lol that is not funny'},
    {
        id: uuid(),
       username:'Lodd',
      comment:'lol that is very lodd'}
]
app.get('/comments', (req, res) =>
{
  res.render('comments/index',{comments})
})

app.get('/comments/new', (req, res) =>
{
  res.render('comments/new',{comments})
})
app.get('/comments/show', (req, res) =>
{
  res.render('comments/show',{comments})
})
app.post('/comments',  (req, res) =>{
const {username, comment} = req.body;
comments.push ({  username,comment })
  res.redirect('/comments');
})
app.get('/comments/:id',(req, res) =>{
const {id} = req.params;
const comment=comments.find(c => c.id ===id);
  res.render('/comments/show',{comment})
})
app.patch('/comments/:id',  (req, res) =>{
const{id} = req.params;
const newCommentText=req.body.comment;
const foundComment=comments.find(c => c.id ===id);
foundComment.comments=newCommentText;
  res.redirect('/comments');
})
app.patch('/comments/:id',  (req, res) =>{
const{id} = req.params;
 comments=comments.filter(c => c.id !== id);
  res.redirect('/comments');
})
app.get('/tacos', (req, res) =>
{
  res.send("GET /tacos response")
})
app.post('/tacos',  (req, res) =>{
const {meat, qty} = req.body;
  res.send('here your ${qty} ${meat} tacos');
})

app.listen(8080, ()  =>{
console.log('port is working');
})
