<template>
  <div>
    <div class="responsive">
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
          <UserRow
            v-for="(user, index) in users"
            :key="user._id"
            :position="index + 1"
            :user="user"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UserRow from "@/components/UserRow";

export default {
  name: "UserList",
  components: {
    UserRow
  },
  props: {
    users: {
      type: Array,
      default: () => []
    }
  }
};
</script>
