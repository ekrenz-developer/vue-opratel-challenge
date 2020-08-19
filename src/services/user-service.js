import axios from "axios";

const userService = {};

userService.getUsers = function() {
  return axios.get("/all");
};

userService.addUser = function(data) {
  return axios.post("/add", data);
};

// No funciona correctamente el endpoint en la API
userService.updateUser = function(data, id) {
  return axios.post(`/update/${id}`, data);
};

userService.deleteUser = function(id) {
  return axios.get(`/delete/${id}`);
};

export default userService;
