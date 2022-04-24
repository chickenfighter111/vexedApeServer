const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
require('dotenv').config();

const app = express();

const port = 5000;

// Connect to the database
mongoose
  // .connect('mongodb+srv://snghbeer:Lolpapa1@coinflip.alphi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { dbName: 'coin_flip_list', useNewUrlParser: true })
  .connect('mongodb+srv://Daniel:$pkhong0218$@cluster0.kizfy.mongodb.net/test', { dbName: 'coin_flip_list', useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});