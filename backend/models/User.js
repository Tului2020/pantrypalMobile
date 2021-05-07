const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  ingredients: 
  // [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
  {   
    type: Array,    
    "default": []
    
  },
  preferences: {   
    type: Array,    
    "default": []
  },
  exclusions: {    
    type: Array,    
    "default": []
  },
  recipes: 
  // [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
  {       
    type: Array,
    "default": []
    
  },
  saved_recipes: 
  // [{ type: Schema.Types.ObjectId, ref: 'Recipe' }]
  {
    type: Array,
    "default": []
  }

}, {
  timestamps: true
})


module.exports = User = mongoose.model('User', UserSchema);