<template>
  <div class="row mt-3">
    <!-- 菜单页面 -->
    <div class="col-md-7 col-sm-12">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>尺寸</th>
                <th>价格</th>
                <th>添加</th>
              </tr>
            </thead>
            <tbody v-for="good in goods">
              <tr>
                <th><strong>{{good.name}}</strong></th>
              </tr>
              <tr v-for="option in good.options">
                <th>{{option.size}}</th>
                <th>{{option.price}}</th>
                <th><span class="btn btn-outline-success btn-sm" v-on:click="addToBasket(good,option)">+</span></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- 购物车部分 -->
    <div class="col-md-5 col-sm-12">
      <div class="card">
        <div class="card-body">
          <div v-if="basket.length > 0">
            <table class="table">
              <thead>
                <tr>
                  <th>数量</th>
                  <th>品种</th>
                  <th>单价</th>
                  <th>价格</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="good in basket">
                  <th>
                    <span class="btn btn-sm" v-on:click="decreaseQuantity(good)">-</span>
                    <span>{{good.quantity}}</span>
                    <span class="btn btn-sm" v-on:click="increaceQuantity(good)">+</span>
                  </th>
                  <th>{{good.name}}{{good.size}}寸</th>
                  <th>{{good.price}}</th>
                  <th>{{good.price*good.quantity}}</th>
                </tr>
              </tbody>
            </table>
            <p>总价：{{total}}RMB</p>
            <button class="btn btn-block btn-success">提交</button>
          </div>
          <p v-else>{{basketText}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-menu",
  data() {
    return {
      // 购物车展示数据
      basket: [],
      basketText: "购物车没有任何商品!",
      // 菜单展示数据
      goods: []
    }
  },
  created(){
    //数据库获取数据
    this.axios.get("/goods.json")
    .then((res) => {
      let goods = res.data;
      for(let key in goods){
        this.goods.push(goods[key])
      }
    })
  },
  computed: {
    // 计算总的价钱
    total() {
      let totalPrice = 0;
      this.basket.forEach((good) => {
        totalPrice += good.quantity * good.price
      })
      return totalPrice;
    }
  },
  methods: {
    //添加到购物车
    addToBasket(good, option) {
      let goodObj = {
        name: good.name,
        size: option.size,
        price: option.price,
        quantity: 1
      };
      if (this.basket.length > 0) {
        // 过滤
        let result = this.basket.filter((item) => {
          return (item.name == goodObj.name && item.price == goodObj.price);
        });
        if (result.length > 0) {
          result[0].quantity++;
        } else {
          this.basket.push(goodObj)
        }
      } else {
        this.basket.push(goodObj)
      }
    },
    // 减少数量
    decreaseQuantity(good) {
      if (good.quantity == 1) {
        // 如果减少到0，那么将当前的对象从basket中删除（indexOf(elem) =>返回当前元素的索引    splice(index1,num)  从某个索引开始删除num个元素     ）
        this.basket.splice(this.basket.indexOf(good), 1)
      } else {
        good.quantity--;
      }

    },
    // 增加数量
    increaceQuantity(good) {
      good.quantity++;
    }
  }
}

</script>
