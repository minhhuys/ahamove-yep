<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header @onScroll="scrollTo" />
    <Banner />
    <Introduce ref="introduce" @onScroll="scrollTo" />
    <Images />
    <News ref="news" />
    <Form ref="form" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Introduce from "@/components/Introduce.vue";
import Form from "@/components/Form.vue";
import News from "@/components/News.vue";
import Images from "@/components/Images.vue";

export default {
  components: {
    Header,
    Banner,
    Introduce,
    Form,
    News,
    Images
  },
  methods: {
    scrollTo(ele) {
      const element = this.$refs[ele].$el;
      const eleRect = element.getBoundingClientRect();

      document.scrollingElement.scrollTo({
        top: document.scrollingElement.scrollTop + eleRect.top,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  // padding-bottom: 50px;
}
</style>
