<template>
  <header class="d-flex space-between align-center main-layout">
    <div>
      <img src="@/assets/ahamove-logo.png" alt="Ahamove Logo" />
    </div>
    <div class="d-flex space-between align-center">
      <div>
        <a @click="scrollTo('introduce')">Giới thiệu</a>
        <a @click="scrollTo('form')"> Địa điểm tổ chức</a>
        <a @click="scrollTo('news')">Tin tức chương trình</a>
      </div>
      <button class="btn-customize" @click="scrollTo('form')">
        Đăng ký tham gia
      </button>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    scrollTo(ele) {
      this.$emit("onScroll", ele);
    }
  }
};
</script>
<style lang="scss" scoped>
header {
  height: 90px;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;

  div.d-flex {
    font-size: 14px;
    > div {
      a {
        margin: 0 20px;
        cursor: pointer;
      }
    }
    button {
      width: 200px;
    }
  }
}

@media screen and (max-width: 780px) {
  header {
    padding: 0 15px;
    a {
      display: none;
    }

    div.d-flex {
      button {
        width: 150px;
      }
    }
  }
}
</style>
