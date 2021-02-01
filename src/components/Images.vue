<template>
  <div class="images">
    <div class="images__title">
      <img src="@/assets/magical.png" alt="" />
      <div>Cảm ơn bạn đã tham gia sự kiện</div>
    </div>

    <VueAgile
      autoplay
      centerMode
      >
      <div class="slide">
        <img
          src="https://cdn.ahamove.com/app/images/c6b1c342c82eafdba9412212d69eb048.jpeg"
          alt=""
        />
      </div>
      <div class="slide">
        <img src="@/assets/2.jpeg" alt="" />
      </div>
      <div class="slide">
        <img src="@/assets/3.jpeg" alt="" />
      </div>
      <div class="slide">
        <img src="@/assets/4.jpeg" alt="" />
      </div>
      <template slot="prevButton">
        <span>&#10094;</span>
      </template>
      <template slot="nextButton">
        <span>&#10095;</span>
      </template>

    </VueAgile>

    <button class="images__view-more" @click="viewMore">Xem tất cả hình ảnh</button>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  components: {
    VueAgile
  },
  methods: {
    viewMore() {
      window.open('https://drive.google.com/drive/folders/1afLKtc9H9IeoQNcwP7TXWUmLAcasByZU?usp=sharing', '_blank')
    }
  }
};
</script>

<style lang="scss">
.images {
  max-width: 1200px;
  margin: 24px auto;
  padding: 50px;
  background-image: url("../assets/main-bg-s2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  .images__title {
    img {
      width: 290px;
      height: 110px;
    }

    > div {
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;
      color: #fff;
      margin: 24px auto 66px;
    }
  }

  .images__view-more {
    margin-top: 50px;
    height: 48px;
    width: 200px;
    color: #fff;
    background-color: #FF8200;
    font-weight: 600;
    outline: none;
    cursor: pointer;
    border: none;
    font-size: 16px;
  }
}


@media screen and (max-width: 480px) {
  .images {
    .images__title > div {
      font-size: 21px;
      line-height: normal;
    }
  }
}
</style>

<style lang="sass">
.agile
  &__nav-button
    background: transparent
    border: none
    color: #fff
    cursor: pointer
    font-size: 24px
    height: 100%
    position: absolute
    top: 0
    transition-duration: .3s
    width: 80px
    font-size: 36px

    &:hover
      background-color: rgba(#000, .5)
      opacity: 1

    &--prev
      left: 0

    &--next
      right: 0

  &__dots
    bottom: 10px
    left: 50%
    position: absolute
    transform: translateX(-50%)

  &__dot
    margin: 0 10px

    button
      background-color: transparent
      border: 1px solid #fff
      border-radius: 50%
      cursor: pointer
      display: block
      height: 10px
      font-size: 0
      line-height: 0
      margin: 0
      padding: 0
      transition-duration: .3s
      width: 10px

    &--current,
    &:hover
      button
        background-color: #fff

// Slides styles
.slide
  display: block
  height: 500px
  object-fit: cover
  width: 100%
</style>
