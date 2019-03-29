<template>
  <div class="row mt-3">
    <!-- 添加商品部分 -->
    <div class="col-md-8 col-sm-12">
      <add-new-pizza></add-new-pizza>
    </div>
    <!-- 添加商品预览预览部分 -->
    <div class="col-md-4 col-sm-12" v-if="goods.length>0">
      <h3 class="text-muted">菜单</h3>
      <table class="table table-default">
        <thead>
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="good in goods">
            <th>{{good.name}}</th>
            <th><span class="btn btn-outline-danger btn-sm" @click="deleteGood(good)">&times;</span></th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import NewPizza from "./NewPizza.vue"
export default {
  name: "admin",
  data() {
    return {
      goods: []
    }
  },
  created() {
    //axios 获取数据
    this.axios.get("/goods.json")
      .then(res => {
        let data = res.data;
        for (let key in data) {
          data[key].id = key;
          this.goods.push(data[key]);
        }
      })
  },
  components: {
    "add-new-pizza": NewPizza
  },
  methods:{
    // 删除pizza数据
    deleteGood(good){
      this.goods.splice(this.goods.indexOf(good),1);
      this.axios.delete("/goods/" + good.id + ".json")
      // setTimeout(()=> {
      //   this.$router.push("/menu")
      // },3000)
    }
  }
  /*beforeRouteEnter:(to,from,next) => {
    alert("hello" + this.name);
    next()
    next( vm => {
      alert("Hello" + vm.name)
    })
  },
  beforeRouteLeave:(to,from,next) => {
    if(confirm("确定要离开这个页面吗？") == true) {
      next()
    }
  }*/
}

</script>
