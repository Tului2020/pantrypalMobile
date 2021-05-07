const fs = require('fs');

// const importedData = require('./data/localIngredients');


const mergeWrite = (fileSalt = null) => (newData)=> {
  const filePath = `./spoonacular_api/data/localIngredients${fileSalt}.js`
  // const mergedData = Object.assign({}, importedData, newData);
  const dataToBeWritten = 'let ingredients = ' + JSON.stringify(newData, null, 2)
    + '\nmodule.exports = ingredients'
  
  
  
  fs.writeFile(filePath, dataToBeWritten, "utf8", function (error, data) {
      console.log(`${fileSalt} Done`);
      if (error) console.log(error);
      // console.log(dataToBeWritten);
    });
}

module.exports = mergeWrite;

