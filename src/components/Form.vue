<template>
  <div class="form">
    <div class="text-center">
      <img src="@/assets/logo-white.png" alt="Logo Ahamove" />
    </div>
    <div class="text-center yep-img" style="margin-bottom: 1rem;">
      <img src="@/assets/yep.png" alt="YEP image" />
    </div>
    <div class="form__register">
      <div class="form__register--tab">
        <p
          class="form__register--tab-link"
          :class="{ active: isActiveTabConent === 'sgn' }"
          @click="selectTab('sgn')"
        >Sài Gòn</p>
        <p
          class="form__register--tab-link"
          :class="{ active: isActiveTabConent === 'han' }"
          @click="selectTab('han')"
        >Hà Nội</p>
      </div>
      <TabContent
        :key="isActiveTabConent"
        :info="isActiveTabConent === 'han' ? info[0] : info[1]"
        :data="info"
        @setHappened="handleEventHappened"
      />
    </div>
  </div>
</template>

<script>
import TabContent from "@/components/TabContent.vue";

export default {
  components: {
    TabContent
  },
  data() {
    return {
      isActiveTabConent: "",
      info: [
        {
          id: "han",
          location: "Pullman Hanoi",
          detail: "<p>Số 40 phố Cát Linh, Đống Đa, Hà Nội</p>",
          time: `Vào lúc 17 giờ 30`,
          date: "THỨ BẢY - 30 | 01 | 2021",
          timeToCountDown: "Jan 30, 2021 17:30:00",
          isHappened: false
        },
        {
          id: "sgn",
          location: "The ADORA Center",
          detail:
            "<p>431 Hoàng Văn Thụ, <br/> Phường 4, Q.Tân Bình, <br/>Hồ Chí Minh</p>",
          time: `Vào lúc 18 giờ 00`,
          date: "THỨ NĂM - 28 | 01 | 2021",
          timeToCountDown: "Jan 28, 2021 18:00:00",
          isHappened: false
        }
      ]
    };
  },
  methods: {
    selectTab(city) {
      this.isActiveTabConent = city;
    },

    handleEventHappened(id) {
      console.log("id", id);
      const location = this.info.find(e => e.id === id);
      location.isHappened = true;
    }
  },
  mounted() {
    this.isActiveTabConent = "sgn";
  }
};
</script>

<style lang="scss" scoped>
.form {
  //   background: linear-gradient(180deg, #01002b 0%, #2421b4 100%);
  background-image: url("../assets/form-background.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0;

  .form__register {
    background-color: white;
    box-shadow: 0px 8px 40px rgba(175, 145, 100, 0.1);
    border-radius: 4px;
    max-width: 600px;
    margin: 0 auto;

    .form__register--tab {
      overflow: hidden;
      // border-bottom: 1px solid #dfddd9;
      display: flex;

      .form__register--tab-link {
        border-bottom: 1px solid #dfddd9;
        font-weight: 600;
      }

      p {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        cursor: pointer;
        width: 50%;
        text-align: center;
        padding: 15px 0;
        font-size: 16px;
        color: #dfddd9;
      }

      p.active {
        color: #f26724;
        border-bottom: 2px solid #f26724;
      }
    }

    .tabcontent {
      padding: 6px 12px;
      -webkit-animation: fadeEffect 1s;
      animation: fadeEffect 1s;
    }

    /* Fade in tabs */
    @-webkit-keyframes fadeEffect {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeEffect {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
}

@media screen and (max-width: 780px) {
  .form {
    padding: 25px 15px;
    .yep-img {
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
