import axios from "axios";

const BASE_URL = "https://node-opratel-challenge.herokuapp.com";
const userService = {};

userService.getUsers = function() {
  return axios.get(`${BASE_URL}/api/v1/users`);
};

userService.addUser = function(data) {
  return axios.post(`${BASE_URL}/api/v1/users`, data);
};

// No funciona correctamente el endpoint en la API
userService.updateUser = function(data, id) {
  return axios.put(`${BASE_URL}/api/v1/users/${id}`, data);
};

userService.deleteUser = function(id) {
  return axios.delete(`${BASE_URL}/api/v1/users/${id}`);
};

export default userService;
