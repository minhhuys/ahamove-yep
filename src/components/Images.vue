<template>
  <div class="images">
    <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <div>
        <img
          src="https://cdn.ahamove.com/app/images/c6b1c342c82eafdba9412212d69eb048.jpeg"
          alt=""
        />
      </div>
      <div>
        <img src="@/assets/2.jpeg" alt="" />
      </div>
      <div>
        <img src="@/assets/3.jpeg" alt="" />
      </div>
      <div>
        <img src="@/assets/4.jpeg" alt="" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        centerMode: true,
        centerPadding: "60px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500
      }
    };
  }
};
</script>

<style lang="scss">
.images {
  max-width: 1200px;
  margin: 0 auto;
  div {
    background-color: red;
  }
}
</style>
