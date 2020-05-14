const express = require('express');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./routes/route');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

mongoose.connect(process.env.mongoURL,{ 
  useNewUrlParser : true,
  useUnifiedTopology : true
}, (err, res)=> {
  if(!err){
    console.log('connection established with mongodb ...!');
  } else{
    console.log('something went wrong with mongodb')
  }
})


app.use('/', router);

app.listen(port, ()=> {
  console.log(`server starts on port * ${port}`)
})