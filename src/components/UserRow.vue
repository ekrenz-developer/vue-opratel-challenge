<template>
  <tr>
    <th scope="row">{{ position }}</th>
    <td v-if="canEdit">
      <input type="text" placeholder="Nombre" v-model="userToUpdate.name" key="name-input">
    </td>
    <td v-else>
      {{ user.name }}
    </td>

    <td v-if="canEdit">
      <input type="text" placeholder="Apellido" v-model="userToUpdate.lastname" key="lastname-input">
    </td>
    <td v-else>
      {{ user.lastname }}
    </td>

    <td v-if="canEdit">
      <input type="text" placeholder="Email" v-model="userToUpdate.email" key="email-input">
    </td>
    <td v-else>
      {{ user.email }}
    </td>
    
    <td v-if="canEdit">
      <input type="text" placeholder="Teléfono" v-model="userToUpdate.phone" key="phone-input">
    </td>
    <td v-else>
      {{ user.phone }}
    </td>

    <td v-if="!canEdit">
      <button @click="editUser">Editar</button>
    </td>
    <td v-else>
      <button @click="saveChanges">Guardar</button>
    </td>

    <td v-if="!canEdit">
      <button @click="deleteUser">Eliminar</button>
    </td>
    <td v-else>
      <button @click="cancel">Cancelar</button>
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
        this.$emit("update-user", this.userToUpdate, this.user._id);
      }
    },
    deleteUser() {
      this.$emit("delete-user", this.user._id);
    }
  }
};
</script>
