<template>
  <div>
    <button
      type="button"
      @click="addNewUser = true"
      class="btn btn-primary mb-3 mr-3"
    >
      Agregar usuario
    </button>
    <button type="button" @click="getUsers" class="btn btn-info mb-3">
      Actualizar tabla
    </button>
    <spinner :loading="loading" />
    <div class="responsive-table" v-if="!loading">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Mail</th>
            <th scope="col">Teléfono</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <user-row
            v-for="(user, index) in users"
            :key="user._id"
            :position="index + 1"
            :user="user"
            :edit="false"
            @update-user="updateUser"
            @delete-user="deleteUser"
          />
          <user-row
            v-if="addNewUser"
            :position="users.length + 1"
            :user="user"
            :edit="true"
            @add-user="addUser"
            @handle-add-user="handleAddUser"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UserRow from "@/components/UserRow";
import Spinner from "@/components/Spinner";

export default {
  name: "UserList",
  components: {
    UserRow,
    Spinner
  },
  data() {
    return {
      addNewUser: false,
      user: {
        name: null,
        lastname: null,
        email: null,
        phone: null
      }
    };
  },
  props: {
    users: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean
    }
  },
  methods: {
    updateUser(user, id) {
      this.$emit("update-user", user, id);
    },
    getUsers() {
      this.$emit("get-users");
    },
    addUser(user) {
      this.handleAddUser();
      this.$emit("add-user", user);
    },
    deleteUser(id) {
      this.$emit("delete-user", id);
    },
    handleAddUser() {
      this.addNewUser = !this.addNewUser;
    }
  }
};
</script>

<style scoped lang="scss">
.responsive-table {
  overflow-x: auto;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
