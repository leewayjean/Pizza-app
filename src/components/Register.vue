<template>
  <div class="row mt-3">
    <!-- 注册完成后显示页面 -->
    <div class="col-md-12">
      <div class="card" v-if="isRegister">
        <div class="card-body text-center card-success">
          <div class="card-body">
            <h3 class="card-title text-success">注册成功！</h3>
            <p class="card-text">正在跳转至登录页面...</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 注册页面 -->
    <div class="col-md-12" v-if="!isRegister">
      <div class="card">
        <div class="card-body">
          <img src="../assets/icon.png" alt="" class="mx-auto d-block">
          <form action="">
            <div class="form-group">
              <label for="email">邮箱：</label>
              <input type="email" class="form-control" v-model="user.email" name="email">
            </div>
            <div class="form-group">
              <label for="password">密码：</label>
              <input type="password" class="form-control" v-model="user.password">
            </div>
            <div class="form-group">
              <label for="confirmPassword">确认密码：</label>
              <input type="password" class="form-control" v-model="user.confrimPassword">
            </div>
            <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-block btn-success">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      user: {
        email: "",
        password: null,
        confrimPassword: null
      },
      isRegister: false
    }
  },
  methods: {
    // 提交注册信息
    onSubmit() {
      if (this.user.password === this.user.confrimPassword) {
        this.axios.post("/users.json", this.user)
          .then((res) => {})
          .then(() => {
            setTimeout(() => {
              this.isRegister = true;
            }, 2000)


            setTimeout(() => {
              this.$router.push("/login")
            }, 5000)

          })
      } else {
        alert("两次密码不一致，请从新输入密码！")
      }
    }
  }
}

</script>
<style scoped>
img {
  margin: 0 auto;
}

</style>
