const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys_dev').mongoURI;
const ingredients = require('./routes/api/ingredients');
const recipes = require('./routes/api/recipes');
const users = require('./routes/api/users');
const bp = require('body-parser')

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected!!!!!!!!!!!!'))
  .catch(err => console.log(err))

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
  
// app.use(cors());
app.use('/api/users', users);
app.use('/api/ingredients', ingredients);
app.use('/api/recipes', recipes);

const port = process.env.PORT || 5000;
// const port  = 5000
app.listen(port, () => console.log(`Listening on ${port}`));
