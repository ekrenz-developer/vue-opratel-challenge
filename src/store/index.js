import Vue from "vue";
import Vuex from "vuex";

import userService from "../services/user-service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    isLoading: false,
    error: undefined
  },
  getters: {
    users: state => state.users,
    isLoading: state => state.isLoading,
    error: state => state.error
  },
  mutations: {
    setUsers: (state, users) => (state.users = users),
    setIsLoading: (state, isLoading) => (state.isLoading = isLoading),
    setError: (state, error) => (state.error = error)
  },
  actions: {
    async getUsers({ commit }) {
      try {
        commit("setError", undefined);
        commit("setIsLoading", true);
        const response = await userService.getUsers();
        if (response.data.error) {
          throw new Error(response.data.message);
        }
        commit("setUsers", response.data.data);
      } catch (err) {
        commit("setError", err.message);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async addUser({ commit }, user) {
      try {
        commit("setError", undefined);
        const response = await userService.addUser(user);

        if (response.data.error) {
          throw new Error(response.data.message);
        }

        this.dispatch("getUsers");
      } catch (err) {
        commit("setError", err.message);
      }
    },
    async updateUser({ commit }, user) {
      try {
        commit("setError", undefined);
        const id = user._id;
        delete user._id;
        const response = await userService.updateUser(user, id);

        if (response.data.error) {
          throw new Error(response.data.message);
        }

        this.dispatch("getUsers");
      } catch (err) {
        commit("setError", err.message);
      }
    },
    async deleteUser({ commit }, id) {
      try {
        commit("setError", undefined);
        const response = await userService.deleteUser(id);

        if (response.data.error) {
          throw new Error(response.data.message);
        }

        this.dispatch("getUsers");
      } catch (err) {
        commit("setError", err.message);
      }
    }
  }
});
