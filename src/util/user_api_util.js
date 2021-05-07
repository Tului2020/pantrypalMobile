import axios from 'axios';

export const fetchUser = (id) => {
    return axios.get(`/api/users/${id}`)
}

export const updateUser = (data) => {
  return axios.patch(`/api/users/${data.id}`, data)
};


export const fetchIngredient = (name) => {
  return axios.get(`/api/ingredients/${name}`)
}

