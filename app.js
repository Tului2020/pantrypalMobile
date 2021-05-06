const mongoose = require('mongoose');
const express = require("express");
const path = require('path');
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const ingredients = require("./routes/api/ingredients");
const recipes = require("./routes/api/recipes");

// app.get("/", (req, res) => res.send("Helloooooooooooooooo World"));

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' })); // this solved the 413 error (Too much info is sent at the same time)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}


app.use("/api/users", users);
app.use("/api/ingredients", ingredients);
app.use("/api/recipes", recipes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));