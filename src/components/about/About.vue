<template>
  <div class="about">
    <div class="row mb-5">
      <div class="col-4">
        <ul class="list-group mb-5">
          <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
            <a class="list-group-item list-group-item-action">历史订单</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
            <a class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'orderingGuideLink'}">
            <a class="list-group-item list-group-item-action">点餐文档</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'diliveryLink'}">
            <a class="list-group-item list-group-item-action">快递信息</a>
          </router-link>
        </ul>
      </div>
      <div class="col-8 about-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped>
.about-view {
  margin-top: 8px;
}

</style>
