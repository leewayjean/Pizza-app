<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">快递信息</div>
    <div class="card-body">
      <h4 class="card-title">快递信息详情</h4>
      <p class="card-text">收件人：</p>
      <h3>{{user.name}}</h3>
      <p>收件人联系电话</p>
      <h4>{{user.phoneNumber}}</h4>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: "lee",
        phoneNumber: 122332333
      }
    }
  }
}

</script>
