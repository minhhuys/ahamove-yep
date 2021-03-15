<template>
  <div class="introduce">
    <div class="main-layout d-flex">
      <div class="introduce__left">
        <h2>AHAMOVE NEW YEAR PARTY 2021</h2>
        <p>
          Với chủ đề
          <span style="color: #ff8200">“A MAGICAL TECHNOLOGY”</span>, sự kiện Aha’s NYP nhằm đánh dấu mốc khép lại hành trình ngoạn mục 2020 và chào đón những bùng nổ, bứt phá và “phép màu” từ công nghệ của AhaMove trong năm 2021.
          <br />
          <br />Sự kiện hứa hẹn với những sắc màu hiện đại, trẻ trung, sẽ đem đến không gian “sống ảo” cùng những trải nghiệm tuyệt vời cho các AhaClimbers. Bên cạnh đó, các team có cơ hội tỏa sáng và cháy hết mình trên sân khấu với âm thanh, ánh sáng được đầu tư hoành tráng, đậm chất công nghệ. Và hơn hết, cùng hàng loạt nội dung hấp dẫn, siêu bất ngờ sẽ là những món quà đặc biệt dành riêng cho các thành viên nhà AhaMove.
          <br />
          <br />Đừng bỏ lỡ sự kiện NYP 2021
          <span style="color: #ff8200">“A MAGICAL TECHNOLOGY”</span> bạn nhé!
        </p>
        <button class="btn-customize" @click="scrollTo">Tham gia ngay</button>
      </div>
      <div
        class="introduce__right"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <img src="../assets/background-s2-2.png" alt />
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
      text-align: justify;
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
          text-align: justify;
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
