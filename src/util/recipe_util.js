import axios from 'axios';

export const fetchRecipeFromMongoDB = (id) => {
  return axios.get(`/api/recipes/${id}`)
}

export const addRecipe = (object) => {
    return axios.post("/api/recipes/", object)
}