const spoonacular = {
  getRecipesByIngredientsURL: 'https://api.spoonacular.com/recipes/findByIngredients',
  getIngredientsURL: 'https://api.spoonacular.com/food/ingredients/search',
  getRecipeInformationURL: (id) => `https://api.spoonacular.com/recipes/${id}/information`,
  getRecipeInformationBulkURL: 'https://api.spoonacular.com/recipes/informationBulk',
  apiKey1: '67762614dc6a4bf19d81b6b2dd14ea69', 
  apiKey2: '78647f7485354dec813c53261e9429f4',
  apiKey3: 'eff7e27d7d794d769e4a06b810563ce7', // Brynn
  apiKey4: 'eb527cf585ea4f8f8e35d8b496da7862', // Alex
  apiKey5: '3e7553da2ac14d1cae47268dec90057f', // Cole
  apiKey6: 'c718730451164e549904457e26f04894',
  apiKey7: '9f1cbc1ffa774f5eaa1ada12598117d6',
  apiKey8: 'f2633b9a24ec401c8f1bf5ae4a025f76',
  apiKey9: '1ad36479870c4458bc10242fcf9c0b48',
  apiKey10: '753d38148e594c59a0e29446b831c04c'
}

module.exports = spoonacular;