const mergeWrite = require('./files')
const {getIngredient} = require('./spoonacular_api')



// getIngredient('c', mergeWrite)


const getIngredients = () => {
  for (let i = 97; i < 123; i++) {
    let phrase = String.fromCharCode(i)
    getIngredient(phrase, mergeWrite('_' + phrase))
  }
}

// getIngredients()











const mergeIngredients = () => {
  let importedIngredients = {};
  let allIngredients = [];

  for (let i = 97; i < 123; i++) {
    let phrase = String.fromCharCode(i)
    // console.log(phrase)
    importedIngredients = require(`./data/localIngredients_${phrase}`)
    // console.log(importedIngredients[0].name)
    // Object.assign(allIngredients, importedIngredients)
    allIngredients = allIngredients.concat(importedIngredients)
  }
  // console.log(allIngredients)
  return allIngredients
}


// mergeIngredients();

mergeWrite('_all')(mergeIngredients())


