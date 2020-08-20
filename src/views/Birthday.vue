<template>
  <div class="container">
    <div class="row responsiveSpacing">
      <div class="col-md-6 col-sm-12" v-for="user in users" :key="user.id">
        <user-birthday-card :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import UserBirthdayCard from "@/components/UserBirthdayCard";

export default {
  name: "Birthday",
  components: {
    UserBirthdayCard
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Luiggy",
          date: "04 - 04",
          photo: require("@/assets/image1.png"),
          favorite: true,
          highlight: true,
          proximityMsg: "¡SE ACERCA EL CUMPLEAÑOS!"
        },
        {
          id: 2,
          name: "Matizze",
          date: "10 - 03",
          photo: require("@/assets/image2.png"),
          favorite: false,
          highlight: false,
          proximityMsg: "PRÓXIMO EN CUMPLIR"
        },
        {
          id: 3,
          name: "Sebas",
          date: "07 - 01",
          photo: require("@/assets/image3.png"),
          favorite: false,
          highlight: false,
          proximityMsg: "PRÓXIMO EN CUMPLIR"
        },
        {
          id: 4,
          name: "Nachito",
          date: undefined,
          photo: require("@/assets/image4.png"),
          favorite: true,
          highlight: false,
          proximityMsg: "YA CUMPLIÓ"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/_functions";
@import "~bootstrap/scss/_variables";
@import "~bootstrap/scss/mixins/_breakpoints";

.responsiveSpacing {
  margin-left: 0px;
  margin-right: 0px;
}

@include media-breakpoint-up(lg) {
  .responsiveSpacing {
    margin-left: 100px;
    margin-right: 100px;
  }
}

@include media-breakpoint-up(xl) {
  .responsiveSpacing {
    margin-left: 200px;
    margin-right: 200px;
  }
}
</style>
