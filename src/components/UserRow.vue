<template>
  <tr>
    <th scope="row">{{ position }}</th>
    <td v-if="canEdit">
      <input
        type="text"
        placeholder="Usuario"
        v-model="userToUpdate.username"
        key="username-input"
      />
    </td>
    <td v-else>
      {{ user.username }}
    </td>

    <td v-if="canEdit">
      <input
        type="text"
        placeholder="Nombre"
        v-model="userToUpdate.name"
        key="name-input"
      />
    </td>
    <td v-else>
      {{ user.name }}
    </td>

    <td v-if="canEdit">
      <input
        type="text"
        placeholder="Apellido"
        v-model="userToUpdate.lastname"
        key="lastname-input"
      />
    </td>
    <td v-else>
      {{ user.lastname }}
    </td>

    <td v-if="canEdit">
      <input
        type="text"
        placeholder="Email"
        v-model="userToUpdate.email"
        key="email-input"
      />
    </td>
    <td v-else>
      {{ user.email }}
    </td>

    <td v-if="!canEdit">
      <font-awesome-icon
        class="button-icon"
        @click="editUser"
        icon="edit"
        title="Editar"
      />
    </td>
    <td v-else>
      <font-awesome-icon
        class="button-icon"
        @click="saveChanges"
        icon="check"
        title="Guardar"
      />
    </td>

    <td v-if="!canEdit">
      <font-awesome-icon
        class="button-icon"
        @click="deleteUser"
        icon="trash-alt"
        title="Eliminar"
      />
    </td>
    <td v-else>
      <font-awesome-icon
        class="button-icon"
        @click="cancel"
        icon="times"
        title="Cancelar"
      />
    </td>
  </tr>
</template>

<script>
export default {
  name: "UserRow",
  props: {
    position: {
      type: Number
    },
    user: {
      type: Object
    },
    edit: {
      type: Boolean
    }
  },
  data() {
    return {
      canEdit: this.edit,
      userToUpdate: { ...this.user }
    };
  },
  methods: {
    editUser() {
      this.canEdit = true;
    },
    cancel() {
      if (this.edit) {
        this.$emit("handle-add-user");
      } else {
        this.canEdit = false;
      }
    },
    saveChanges() {
      this.canEdit = false;
      if (this.edit) {
        this.$emit("add-user", this.userToUpdate);
      } else {
        this.$emit("update-user", this.userToUpdate);
      }
    },
    deleteUser() {
      this.$emit("delete-user", this.user._id);
    }
  }
};
</script>

<style scoped lang="scss">
.button-icon:hover {
  cursor: pointer;
  opacity: 0.5;
}
</style>
