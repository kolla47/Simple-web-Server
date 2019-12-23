const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname,'public')));



app.get('/users', (req,res)=>{
  let users = [
    {
      first_name: "kolla",
      last_name: "akhil",
      age: 20,
      gender: "male"
    },
    {
      first_name: "nn",
      last_name: "tom",
      age: 30,
      gender: "male"
    },
    {
      first_name: "hfg",
      last_name: "jajsdn",
      age: 23,
      gender: "male"
    },
  ];

  res.json(users)
});

app.get('/download', (req,res)=>{
  res.download(path.join(__dirname,'downloads/sample.pdf'))
});

app.get('/about', (req,res)=>{
  res.redirect('/about.html')});

app.post('/subscribe', (req,res)=>{
  let name = req.body.name;
  let email = req.body.email;
  console.log(name+'has subscribed with email '+email);
})

app.listen(2000,function(){
  console.log("server started!!");
})
