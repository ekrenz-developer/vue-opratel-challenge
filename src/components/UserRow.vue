<template>
  <tr>
    <th scope="row">{{ position }}</th>
    <td>
      {{ user.name }}
    </td>
    <td>
      {{ user.lastname }}
    </td>
    <td>
      {{ user.email }}
    </td>
    <td>
      {{ user.phone }}
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
    }
  }
};
</script>
