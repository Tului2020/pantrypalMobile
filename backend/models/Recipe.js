const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  spoonacularId: {
    type: Number,
    required: true
  },
  recipeObject: {
    type: Object,
    required: true
  }  
}, {
  timestamps: true,
})

module.exports = Recipe = mongoose.model('Recipe', RecipeSchema);

