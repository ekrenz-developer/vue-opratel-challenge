<template>
  <div>
    <UserList
      :users="users"
      :loading="isLoading"
      @add-user="addUser"
      @update-user="updateUser"
      @delete-user="deleteUser"
      @get-users="getUsers"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UserList from "@/components/UserList";

export default {
  name: "Users",
  methods: {
    ...mapActions(["getUsers", "addUser", "updateUser", "deleteUser"])
  },
  computed: {
    ...mapGetters(["users", "isLoading", "error"])
  },
  mounted() {
    this.getUsers();
  },
  components: {
    UserList
  }
};
</script>
