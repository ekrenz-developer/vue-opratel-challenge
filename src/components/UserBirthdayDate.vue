<template>
  <div>
    <div
      class="d-flex flex-column align-items-center"
      v-bind:class="{ highlight: highlight }"
    >
      <div class="proximity-msg mb-3">{{ proximityMsg }}</div>
      <div class="row chip-date justify-content-center align-items-center mb-4">
        <font-awesome-icon v-if="date" icon="calendar" class="mr-3" />
        <span>{{ date ? date : "(?)" }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserBirthdayDate",
  props: {
    highlight: {
      type: Boolean
    },
    date: {
      type: String
    },
    proximityMsg: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.chip-date {
  background-color: white;
  border-color: #d5d5d5;
  color: #d5d5d5;
  border-style: solid;
  min-width: 185px;
  min-height: 50px;
  border-radius: 25px;
  font-size: 20px;
}

.proximity-msg {
  color: #d5d5d5;
}

.highlight {
  color: white;

  .proximity-msg {
    color: #69b2fc;
  }

  .chip-date {
    color: white;
    border-style: none;
    background-color: #69b2fc;
  }
}
</style>
