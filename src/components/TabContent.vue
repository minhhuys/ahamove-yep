<template>
  <div class="tab__content">
    <p style="font-weight: 300">
      Ahamove Year-end Party 2020 sẽ được tổ chức tại
    </p>
    <img src="@/assets/flower.png" alt="Flowers" />
    <p>TRUNG TÂM HỘI NGHỊ</p>

    <p class="tab__content--location text-uppercase">{{ info.location }}</p>
    <p class="tab__content--detail text-uppercase" v-html="info.detail"></p>

    <img src="@/assets/flower.png" alt="Flowers" />

    <p class="tab__content--time text-uppercase">{{ info.time }}</p>

    <div class="tab__content--date">
      <p>{{ info.date }}</p>
    </div>

    <p class="tab__content--time-left-text">Chỉ còn</p>

    <div class="tab__content--count-time">
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

    <div class="border-line"></div>

    <div class="tab__content--form" v-if="!isRegisted">
      <p class="tab__content--form-title">
        Đăng ký tham gia
      </p>
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
      <button class="btn-customize" @click="join">Tham dự</button>
    </div>

    <div class="tab__content--message" v-else>
      <img src="@/assets/mail.png" alt="" />
      <p>Chúng tôi vừa gửi QR code đến email của bạn</p>
      <span
        >Vui lòng check mail để kiểm tra QR Code. Bữa tiệc sẽ diễn ra tại địa
        điểm được gửi trong mail. Hẹn gặp lại bạn với những bất ngờ tại Year end
        Party Ahamove 2020</span
      >
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
      isRegisted: false
    };
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
      }, 1000);
    },

    async join() {
      const url = "https://yep.ahamove.net/production/register";

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
        console.log("error", error);
      }

      let result = await response.json();

      if (result && result.data) {
        this.isRegisted = true;
        this.setCookie("is_registed", true, 15);

        // Send telegram
        const data = result.data;
        /* eslint-disable */
        let template = `user: \*${data.name}* %0Aphone: \*${data.phone}* %0Amsc: \*${data.msnv}* %0Acity: \*${data.city_id}*`;

        const url = `https://api.telegram.org/bot${TOKEN_HYPE_AF_BOT}/sendMessage?chat_id=${GROUP_ID}&parse_mode=markdown&text=${template}`;

        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
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
    .tab__content--message {
      span {
        padding: 0 10px;
      }
    }
  }
}
</style>
