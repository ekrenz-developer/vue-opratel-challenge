<template>
  <div>
    <h1>Usuarios</h1>
    <UserList :users="users" />
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
      this.isLoading = true;
      await userService.addUser(user);
      await this.getUsers();
    },
    async updateUser(user, id) {
      this.isLoading = true;
      await userService.addUser(user, { id });
      await this.getUsers();
    },
    async deleteUser(id) {
      this.isLoading = true;
      await userService.addUser({ id });
      await this.getUsers();
    }
  }
};
</script>
