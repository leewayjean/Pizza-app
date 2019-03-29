<template>
  <div class="card">
    <!-- 商品添加成功显示界面 -->
    <div class="card-body" v-if="isSubmited">
      <h3>商品添加成功！</h3>
    </div>
    <!-- 添加商品页面 -->
    <div class="card-body" v-if="!isSubmited">
      <h3 class="text-muted">添加商品</h3>
      <form action="">
        <div class="form-group">
          <label for="">商品名称：</label>
          <input type="text" class="form-control" v-model="good.name">
        </div>
        <div class="form-group">
          <label for="">商品描述：</label>
          <textarea class="form-control" rows="5" v-model="good.description"></textarea>
        </div>
        <h4>套餐一：</h4>
        <div class="form-group">
          <label for="">尺寸：</label>
          <input type="text" class="form-control" v-model="good.options[0].size">
        </div>
        <div class="form-group">
          <label for="">价格：</label>
          <input type="text" class="form-control" v-model="good.options[0].price">
        </div>
        <h4>套餐二：</h4>
        <div class="form-group">
          <label for="">尺寸：</label>
          <input type="text" class="form-control" v-model="good.options[1].size">
        </div>
        <div class="form-group">
          <label for="">价格：</label>
          <input type="text" class="form-control" v-model="good.options[1].price">
        </div>
        <button class="btn btn-outline-success btn-block" @click.prevent="postGood">添加商品</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "new-pizza",
  data() {
    return {
      good: {
        name: "",
        description: "",
        options: [
          { size: "", price: "" },
          { size: "", price: "" }
        ]
      },
      isSubmited: false
    }
  },
  methods: {
    postGood() {
      // 填写所有的商品信心才可以提交
      if (this.good.name && this.good.description && this.good.options) {
        this.axios.post("/goods.json", this.good)
          .then((res) => {
            this.isSubmited = true;
          })
          .then(() => {
            setTimeout(() => {
              this.$router.push({ name: "menuLink" })
            }, 3000)
          })

      } else {
        alert("请填写完整商品信息")
      }

    }
  }
}

</script>
