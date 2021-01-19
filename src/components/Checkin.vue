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

      <button>Checkin</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    };
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
  }
}
</style>