<template>
  <div>
    <UserList
      :users="users"
      @add-user="addUser"
      @update-user="updateUser"
      @delete-user="deleteUser"
      @get-users="getUsers"
    />
  </div>
</template>

<script>
import UserList from "@/components/UserList";
import userService from "../services/user-service";

export default {
  name: "Users",
  data() {
    return {
      users: [],
      isLoading: false
    };
  },
  components: {
    UserList
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        this.isLoading = true;
        let response = await userService.getUsers();
        this.users = response.data;
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoading = false;
      }
    },
    async addUser(user) {
      try {
        await userService.addUser(user);
        await this.getUsers();
      } catch (err) {
        console.log(err);
      }
    },
    async updateUser(user, id) {
      try {
        delete user._id;
        await userService.updateUser(user, id);
        await this.getUsers();
      } catch (err) {
        console.log("Error al actualizar el usuario");
      }
    },
    async deleteUser(id) {
      try {
        await userService.deleteUser(id);
        await this.getUsers();
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
