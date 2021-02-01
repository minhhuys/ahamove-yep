<template>
  <div class="tab__content">
    <p style="font-weight: 300">AhaMove Year-end Party 2020 được tổ chức tại</p>
    <img src="@/assets/flower.png" alt="Flowers" />
    <p>{{ info.id === "han" ? "KHÁCH SẠN" : "TRUNG TÂM HỘI NGHỊ" }}</p>

    <p class="tab__content--location text-uppercase">{{ info.location }}</p>
    <p class="tab__content--detail text-uppercase" v-html="info.detail"></p>

    <img src="@/assets/flower.png" alt="Flowers" />

    <p class="tab__content--time text-uppercase">{{ info.time }}</p>

    <div class="tab__content--date">
      <p>{{ info.date }}</p>
    </div>

    <div v-if="info.id === 'han'">
      <p style="font-size: 30px; color: red;">Tạm hoãn!</p>
    </div>
    <div v-else>
      <p class="tab__content--time-left-text" v-if="!isHappened">Chỉ còn</p>

      <div class="tab__content--count-time" v-if="!isHappened">
        <div>
          <p>{{ days > 9 ? days : `0${days}` }}</p>
          <span>Ngày</span>
        </div>
        <div>
          <p>{{ hours > 9 ? hours : `0${hours}` }}</p>
          <span>Giờ</span>
        </div>
        <div>
          <p>{{ minutes > 9 ? minutes : `0${minutes}` }}</p>
          <span>Phút</span>
        </div>
        <div>
          <p>{{ seconds > 9 ? seconds : `0${seconds}` }}</p>
          <span>Giây</span>
        </div>
      </div>
      <p v-else class="event-happened">Đã diễn ra</p>
    </div>

    <div class="border-line"></div>

    <div v-if="!isHappened">
      <div v-if="info.id !== 'han'">
        <div class="tab__content--form" v-if="!isRegisted">
          <p class="tab__content--form-title">Đăng ký tham gia</p>
          <input
            type="text"
            name="username"
            v-model="username"
            placeholder="Tên của bạn"
          />
          <input
            type="text"
            name="email"
            v-model="email"
            placeholder="Email công ty"
          />
          <input
            type="number"
            name="phone"
            v-model="phone"
            placeholder="Số điện thoại (vd: 0988922271 😉)"
          />
          <button
            class="btn-customize"
            :class="{ loading: isLoading }"
            @click="join"
            :disabled="isLoading"
          >
            <span v-if="isLoading">Đang gửi</span>
            <span v-else>Tham gia</span>
          </button>
        </div>

        <div class="tab__content--message" v-else>
          <img src="@/assets/mail.png" alt />
          <p>Chúng tôi vừa gửi QR code đến email của bạn</p>
          <span
            >Vui lòng check email để nhận thư mời tham dự. Bạn nhớ lưu lại email
            này để check-in và tham gia các hoạt động khác tại sự kiện. Hẹn gặp
            lại bạn với những bất ngờ tại Year End Party AhaMove 2020!</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const TOKEN_HYPE_AF_BOT = `1426025102:AAESBLMaHw7OE7szE_n54VgxRKd_yh7Mzz8`;
const GROUP_ID = `-415110372`;

export default {
  props: {
    info: {
      type: Object
    }
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: null,
      phone: "",
      username: "",
      email: "",
      isRegisted: false,
      isLoading: false
    };
  },
  computed: {
    isHappened() {
      return (
        this.days < 0 && this.hours < 0 && this.minutes < 0 && this.seconds < 0
      );
    }
  },
  methods: {
    setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },

    getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },

    estimateTime() {
      const countDownDate = new Date(this.info.timeToCountDown).getTime();
      this.timer = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (
          this.days == 0 &&
          this.hours == 0 &&
          this.minutes == 0 &&
          this.seconds == 0
        ) {
          this.$emit("setHappened", this.info.id);
          clearInterval(this.timer);
        }
      }, 1000);
    },

    async join() {
      this.isLoading = true;
      const url = "https://yepapi.ahamove.net/production/register";

      let params = {
        phone: this.phone,
        email: this.email
      };
      const uri = new URL(url);

      Object.keys(params).forEach(key =>
        uri.searchParams.append(key, params[key])
      );

      let response;

      try {
        response = await fetch(uri);
      } catch (error) {
        this.username = "";
        this.phone = "";
        this.email = "";
        this.isLoading = false;
      }

      let result = await response.json();

      if (result && result.data) {
        this.isLoading = false;
        this.isRegisted = true;
        this.setCookie("is_registed", true, 15);

        // Send telegram
        const data = result.data;
        /* eslint-disable */
        // https://ahamove.1office.vn/social/search/user?s=
        let template = `user: \*${data.name}* %0Aphone: \*${data.phone}* %0Amsc: \*${data.msnv}* %0Acity: \*${data.city_id}* %0A1office: \*https://ahamove.1office.vn/social/search/user?s=${data.phone}*`;

        const url = `https://api.telegram.org/bot${TOKEN_HYPE_AF_BOT}/sendMessage?chat_id=${GROUP_ID}&parse_mode=markdown&text=${template}`;

        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
      }

      if (result && result.message) {
        this.username = "";
        this.phone = "";
        this.email = "";
        this.isLoading = false;
        alert(
          `Vui lòng nhập đúng thông tin số điện thoại và email đã đăng ký với công ty 🤬`
        );
      }
    }
  },
  created() {
    this.estimateTime();

    let cookie = this.getCookie("is_registed");
    if (cookie) {
      this.isRegisted = true;
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>

<style lang="scss" scoped>
.tab__content {
  z-index: 10;
  color: #142246;
  padding-bottom: 50px;

  .text-uppercase {
    text-transform: uppercase;
  }

  .tab__content--location {
    font-size: 36px;
    font-weight: 600;
    color: #ff8200;
    margin: 14px 0;
  }

  .tab__content--detail {
    max-width: 320px;
    margin: 0 auto;
    margin-bottom: 14px;
  }

  .tab__content--date {
    border-top: 1px solid #ff8200;
    border-bottom: 1px solid #ff8200;
    padding: 10px 0;
    max-width: 400px;
    margin: 0 auto;

    p {
      margin: 0;
      font-weight: 600;
      color: #ff8200;
      font-size: 24px;
    }
  }

  .tab__content--time-left-text {
    margin-top: 16px;
    margin-bottom: 0;
  }

  .tab__content--count-time {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    padding-bottom: 16px;
    div {
      width: 25%;

      p {
        color: #007cff;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 8px;
      }
    }
  }

  .event-happened {
    font-size: 20px;
    font-weight: 600;
  }

  .border-line {
    max-width: 400px;
    margin: 0 auto;
    height: 1px;
    background-color: #ff8200;
  }

  .tab__content--form {
    max-width: 400px;
    margin: 0 auto;

    .tab__content--form-title {
      font-size: 24px;
      font-weight: bold;
      color: #ff8200;
    }

    input {
      width: 100%;
      height: 48px;
      background: #f2f3f4;
      border-radius: 4px;
      border: none;
      outline: none;
      margin-bottom: 16px;
      padding-left: 10px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }

    button {
      width: 100%;
      border-radius: 2px;
    }

    button.loading {
      background-color: #eaeaea;
      color: white;
    }
  }

  .tab__content--message {
    padding-top: 16px;
    max-width: 400px;
    margin: 0 auto;

    p {
      font-weight: 600;
      color: #0a1332;
    }

    span {
      font-size: 14px;
      color: #0a1332;
      opacity: 0.6;
    }
  }
}

@media screen and (max-width: 780px) {
  .tab__content {
    .tab__content--form {
      padding: 0 15px;
    }
    .tab__content--message {
      span {
        padding: 0 10px;
      }
    }
  }
}
</style>
