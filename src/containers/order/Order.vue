<template>
  <div>
    <div class="order-status-bar _flex-row _bg-color-accent">
      <div
        @click="back"
        class="back _flex-row _cross-center _main-center _font-size-bigger">
        <i class="fa fa-angle-left _font-bold"></i>
      </div>
      <div class="_flex-row _cross-center _flex-span">
        <h4 class="_no-margin">{{ pageName }}</h4>
      </div>
      <div
        v-if="pageName === 'Select Product'"
        @click="checkout"
        class="back _flex-row _cross-center _main-center _font-size-bigger">
        <i class="fa fa-shopping-basket"></i>
      </div>
    </div>
    <router-view
      class="order-container"
      @selectLocation="selectLocation">
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'Order',
  methods: {
    back () {
      this.$router.go(-1)
    },
    selectLocation (locationId) {
      console.log('Location ', locationId)
    },
    checkout () {
      console.log('checkout')
    }
  },
  computed: {
    pageName () {
      let path = this.$route.path.split('/order/')[1]
      if (path === 'location') return 'Select Location'
      else if (path === 'product') return 'Select Product'
      else if (path === 'summary') return 'Order Summary'
    }
  }
}
</script>

<style scoped lang="scss">
$status-bar-height: 45px;
.order-container {
  padding-top: $status-bar-height;
}
.order-status-bar {
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 45px;
  color: white;
  .back {
    flex-basis: $status-bar-height;
    min-width: 0px;
    margin-top: -2px;
  }
}
</style>
