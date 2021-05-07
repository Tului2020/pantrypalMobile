const axios = require('axios');
const spoonacular = require('./keys');
// const apiKeyToUse = spoonacular["apiKey" + Math.floor((Math.random() * 4) + 1)] //uses random apiKey between 1 and 4

const apiKeys = [spoonacular.apiKey1, spoonacular.apiKey2, spoonacular.apiKey3, spoonacular.apiKey4, spoonacular.apiKey5, spoonacular.apiKey6, spoonacular.apiKey7, spoonacular.apiKey8, spoonacular.apiKey9, spoonacular.apiKey10]
let numKeys = apiKeys.length



// 01. A function that gets ingredients
const getIngredient = (query, printToFileFunction, key=0) => axios.get(
  spoonacular.getIngredientsURL,
  {
    params: { // params is the body parameters
      query,
      apiKey: apiKeys[key],
      number: 100 //100 is the maximum
    }

  })
  .then(payload => printToFileFunction(payload.data.results))
  .catch(err => {
    console.log(key)
    console.log('402 err')
    getIngredient(query, printToFileFunction, (key+1)%numKeys)
  }) 

  


// 02. A function that gets recipes given ingredients
const getRecipeByIngredients = (ingredients, cbFunction, recipeCount = 100, key=0) => axios.get(
  spoonacular.getRecipesByIngredientsURL,
  {
    params: { // params is the body parameters
      ingredients,
      apiKey: apiKeys[key],
      number: recipeCount, //100 is the maximum
    }

  })
  .then(payload => cbFunction(payload.data))
  .catch(err => {
    console.log(key)
    console.log('402 err')
    getRecipeByIngredients(ingredients, cbFunction, recipeCount = 100, (key+1)%numKeys)
  }) 



// 03. A function that gets information on a particular recipe
const getRecipeInformation = (id, cbFunction, key=0) => axios.get(
  spoonacular.getRecipeInformationURL(id),
  {
    params: {
      apiKey: apiKeys[key],
    }
  })
  .then(payload => cbFunction(payload.data)) // we're gonna need to dispatch this through our reducers and middleware)
  .catch(err => {
    console.log(key)
    console.log(err)
    getRecipeInformation(id, cbFunction, (key+1)%numKeys)
  }) 


// 04. A function that gets information on multiple recipes
const getRecipeInformationBulk = (ids, cbFunction, key=0) => axios.get(
  spoonacular.getRecipeInformationBulkURL,
  {
    params: {
      apiKey: apiKeys[key],
      ids
    }
  })
  .then(payload => cbFunction(payload.data)) // we're gonna need to dispatch this through our reducers and middleware)
  .catch(err => {
    console.log(key)
    console.log('402 err')
    getRecipeInformationBulk(ids, cbFunction, (key+1)%numKeys)
  }) 








// Exporting 3 functions that were created
module.exports = {
  getIngredient,
  getRecipeByIngredients,
  getRecipeInformation,
  getRecipeInformationBulk

}


// Below are sample commands you can run to see output, they are also located in search_results/
// getRecipeByIngredients('apple,blueberry', console.log)
// getRecipeInformation(9003, console.log)
// getIngredient('apple', console.log)
// console.log(apiKeys.indexOf(apiKeyToUse))
// getRecipeInformationBulk('661322,643857', console.log)




