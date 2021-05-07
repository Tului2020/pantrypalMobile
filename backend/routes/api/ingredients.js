const express = require("express");
const router = express.Router();

const Ingredient = require('../../models/Ingredient');


router.get('/:name', (req, res) => {
    Ingredient.findOne({ name: req.params.name})
        .then(ingredientInfo => {
            res.json(ingredientInfo)})
        .catch(err => console.log(err))
})



module.exports = router;

