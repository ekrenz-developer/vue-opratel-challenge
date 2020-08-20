<template>
  <div>
    <div
      class="simple-container d-flex flex-column align-items-center mt-2 mb-3"
    >
      <div class="pt-5 img-container">
        <img class="img-circle" :src="user.photo" />
        <div class="favorite-icon" v-if="user.favorite">
          <favorite-icon />
        </div>
      </div>
      <span class="name">{{ user.name }}</span>
      <user-birthday-date
        :highlight="user.highlight"
        :date="user.date"
        :proximityMsg="user.proximityMsg"
      />
    </div>
  </div>
</template>

<script>
import UserBirthdayDate from "@/components/UserBirthdayDate";
import FavoriteIcon from "@/assets/star.svg";

export default {
  name: "UserBirthdayCard",
  props: {
    user: {
      type: Object
    }
  },
  components: {
    UserBirthdayDate,
    FavoriteIcon
  }
};
</script>

<style scoped lang="scss">
.img-container {
  min-height: 240px;

  .img-circle {
    height: 150px;
    border-radius: 50%;
    z-index: 1;
  }

  .favorite-icon {
    height: 36px;
    width: 36px;
    position: relative;
    bottom: 50px;
    left: 110px;
    z-index: 2;
  }
}

.name {
  font-size: 2.3em;
}

.simple-container {
  min-height: 400px;
  min-width: 200px;
  max-width: 330px;
  border-color: #eaeaea;
  border-style: solid;
}
</style>
