const express = require("express");
const router = express.Router();

const Recipe = require('../../models/Recipe');


router.get('/:id', (req, res) => {
    Recipe.findOne({spoonacularId: req.params.id})
        .then(recipeInfo => {
            console.log(recipeInfo)
            res.json(recipeInfo)})
        .catch(() => {
            console.log("couldnt get")})
})

router.post('/', (req, res) => {

    const newRecipe = new Recipe({
        recipeObject: req.body,
        spoonacularId: req.body.id
    })
    newRecipe.save().then(recipe => res.json(recipe))
        .catch(()=> console.log("couldnt post"));
})



module.exports = router;