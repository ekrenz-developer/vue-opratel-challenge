import apiCall from "./config";

const userService = {};

userService.getUsers = function() {
  return apiCall("/all", null, null, null, "GET");
};

userService.addUser = function(data) {
  return apiCall("/add", data, null, null, "POST");
};

userService.updateUser = function(data, params) {
  return apiCall(`/update`, data, null, params, "PUT");
};

userService.deleteUser = function(params) {
  return apiCall("/delete", null, null, params, "DELETE");
};

export default userService;
