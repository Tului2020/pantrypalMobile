const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const Ingredient = require("../../models/Ingredient");


// Ingredient


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email,
    ingredients: req.user.ingredients,
    preferences: req.user.preferences,
    exclusions: req.user.exclusions,
    recipes: req.user.recipes,
    saved_recipes: req.user.saved_recipes
  });
})

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "A user has already registered with this address" })
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})


router.post('/login', (req, res) => {
  // debugger
  const { errors, isValid } = validateLoginInput(req.body);

//   debugger;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // this works
  // Ingredient.findOne({ name: 'apple' })
    // .then(res => console.log(res))
    // .catch(err => console.log(err))

  
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'This user does not exist' });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = { id: user.id, name: user.name };

            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  userInfo: {
                    recipes: user.recipes,
                    exclusions: user.exclusions,
                    ingredients: user.ingredients,
                    preferences: user.preferences,
                    saved_recipes: user.saved_recipes
                  },

                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            return res.status(400).json({ password: 'Incorrect password' });
          }
        })
    })
})

// Brynn's code starting here... adding user routes for patch for updating pantry ingredients,
// preferences, saved recipes













router.patch('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {

  let filter = {_id: req.user.id};
  let { preferences, exclusions, ingredients, recipes, saved_recipes } = req.body;

  let newInfo = {};
  if (preferences) newInfo.preferences = preferences;
  if (exclusions) newInfo.exclusions = exclusions;
  if (ingredients) newInfo.ingredients = ingredients;
  if (recipes) newInfo.recipes = recipes;
  if (saved_recipes) newInfo.saved_recipes = saved_recipes;

  // console.log(newInfo)
  // debugger


  User.findOneAndUpdate(filter, {$set: newInfo}, {new: true})
    .then(user => {
      let updateUser = {
        id: user._id,
        username: req.body.username,
        preferences: user.preferences,
        exclusions: user.exclusions,
        ingredients: user.ingredients,
        recipes: user.recipes,
        saved_recipes: user.saved_recipes
      }
      res.json(updateUser)
    })
    .catch(err => res.status(400).json(err))

})




router.get('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      let returnedUser = {
        id: user._id,
        username: user.username,
        preferences: user.preferences,
        exclusions: user.exclusions,
        ingredients: user.ingredients,
        recipes: user.recipes,
        saved_recipes: user.saved_recipes
      }
      res.json(returnedUser);
    })
    .catch(err => res.status(400).json(err))
});

module.exports = router;