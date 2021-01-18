<template>
  <div class="introduce">
    <div class="main-layout d-flex">
      <div class="introduce__left">
        <h2>
          AhaMove Year-end Party 2020
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quidem
          pariatur est, at officiis a rem velit eum qui provident? Quod, omnis
          excepturi recusandae amet velit nesciunt aspernatur obcaecati natus?
        </p>
        <button class="btn-customize" @click="scrollTo">
          Tham gia ngay
        </button>
      </div>
      <div
        class="introduce__right"
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <img src="../assets/background-s2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo() {
      this.$emit("onScroll", "form");
    }
  }
};
</script>

<style lang="scss" scoped>
.introduce {
  background-image: url("../assets/main-bg-s2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  .introduce__left {
    width: 50%;
    text-align: left;
    color: white;
    padding: 120px 0;

    h2 {
      font-size: 48px;
    }

    p {
      font-size: 18px;
      margin: 30px 0;
    }

    button {
      width: 180px;
    }
  }

  .introduce__right {
    width: 50%;
    padding: 120px 0;

    img {
      width: 500px;
      height: 500px;
    }
  }
}

@media screen and (max-width: 780px) {
  .introduce {
    .main-layout {
      display: block;
      .introduce__left {
        width: 100%;
        padding: 25px 15px;

        h2 {
          font-size: 30px;
          margin: 10px 0;
        }

        p {
          font-size: 16px;
        }
      }
      .introduce__right {
        width: 100%;
        padding: 50px 15px;

        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
