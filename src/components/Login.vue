<template>
  <div class="row mt-3">
    <div class="col-md-12">
      <div class="card" v-if="isLogin">
        <div class="card-body text-center card-success">
          <div class="card-body">
            <h3 class="card-title text-success">登录成功！</h3>
            <p class="card-text">正在跳转至主页...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12" v-if="!isLogin">
      <div class="card">
        <div class="card-body">
          <img src="../assets/icon.png" alt="" class="mx-auto d-block">
          <form action="">
            <div class="form-group">
              <label for="email">邮箱：</label>
              <input type="email" class="form-control" v-model="user.email">
            </div>
            <div class="form-group">
              <label for="password">密码：</label>
              <input type="password" class="form-control" v-model="user.password">
            </div>
            <button type="submit" class="btn btn-block btn-success" v-on:click.prevent="loginIn">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      isLogin: false
    }
  },
  methods: {
    loginIn() {
      if (this.user.email && this.user.password) {
        this.axios.get("/users.json")
          .then((res) => {
          	//axios获取的数据，遍历存储到数组中，用于后续的过滤
            let data = res.data;
            let usersArray = [];
            for (let key in data) {
              usersArray.push(data[key])
            }

            //过滤账号密码，返回匹配的
            let result = usersArray.filter((user) => {
              return user.email === this.user.email && user.password === this.user.password;
            })

            // 如果返回的result数组的长度>0,那么，账号密码匹配成功
            if (result.length > 0) {
              setTimeout(() => {
                this.isLogin = true;
              }, 1000)


              setTimeout(() => {
                this.$router.push("/")
              }, 3000)

            } else {
              alert("账号或密码错误！")
            }
          })
      } else {
        alert("账号或密码不能为空！")
      }


    }
  }
}

</script>
