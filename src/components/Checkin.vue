<template>
  <div class="checkin">
    <img class="checkin__img" src="@/assets/yep.png" alt />
    <div class="checkin__form">
      <p>
        Email :
        <b>{{info.email}}</b>
      </p>
      <p>
        Số điện thoại :
        <b>{{info.phone}}</b>
      </p>

      <button @click="checkin" :disabled="isLoading">{{isLoading ? `Đang tiến hành` : `Checkin`}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {},
      isLoading: false
    };
  },
  methods: {
    async checkin() {
      this.isLoading = true;
      const url = "https://yepapi.ahamove.net/production/checkin";

      let params = {
        phone: this.info.phone,
        email: this.info.email
      };
      const uri = new URL(url);

      Object.keys(params).forEach(key =>
        uri.searchParams.append(key, params[key])
      );

      let response;

      try {
        response = await fetch(uri);
      } catch (error) {
        alert(error);
      }

      let result = await response.json();

      if (result.message !== "ok") {
        return alert(result.message);
      }
      this.isLoading = false;
      alert("💥Checkin thành công!✨");
      window.close();
    }
  },
  created() {
    const { email, phone } = this.$route.query;

    if (email) this.info.email = email;
    if (phone) this.info.phone = phone;
  }
};
</script>

<style lang="scss" scoped>
.checkin {
  height: 100vh;
  background-image: url("https://ahamove.com/wp-content/uploads/2021/01/form-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;

  .checkin__img {
    max-width: 100%;
    padding-top: 50px;
  }

  .checkin__form {
    width: 350px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 16px;
  }

  button {
    width: 120px;
    height: 48px;
    background: #ff8200;
    color: white;
    border: none;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    border: none;
  }
}
</style>