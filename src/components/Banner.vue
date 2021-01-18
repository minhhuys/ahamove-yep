<template>
  <div class="banner">
    <div>
      <img
        class="introduce__right"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        src="@/assets/yep.png"
        alt="Yep ahamove"
      />
      <img
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        src="@/assets/magical.png"
        alt="magical motherfuck"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  height: calc(100vh - 90px);
  background-image: url("../assets/main-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
  }
}

@media screen and (max-width: 780px) {
  .banner {
    > div {
      width: 80%;

      img {
        max-width: 100%;
      }
    }
  }
}
</style>
