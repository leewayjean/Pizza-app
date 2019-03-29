<template>
  <div class="container mt-3">
    <div class="row">
      <div id="home" class="col-sm-12 text-center">
        <div class="background">
          <h1>欢迎大家品尝pizza!</h1>
          <h2>这里有你非常喜欢的pizza!</h2>
          <button @click="goMenu" class="btn btn-success">马上点餐!</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  methods: {
    goMenu() {
      //this.$router.go()    跳转到上一次浏览的页面
      //跳转到制定的地址
      //this.$router.replace()
      this.$router.push("/menu")
    }
  }
}

</script>
<style scoped>
#home {
  background: url('../../src/assets/pizza.jpg');
  height: 85vh;
  padding: 10%;
}

h1,
h2 {
  margin: 6%;
}

.background {
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}

</style>
