<template>
  <div class="text-center d-flex justify-content-center" v-if="loading">
    <b-spinner variant="success" class="spinner" />
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    loading: {
      type: Boolean
    }
  }
};
</script>

<style scoped lang="scss">
.spinner {
  width: 3rem;
  height: 3rem;
}
</style>
