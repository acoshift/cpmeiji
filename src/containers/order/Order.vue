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
        v-if="pagePath.indexOf('category') !== -1"
        @click="checkout"
        class="checkout _flex-row _cross-center _main-center _font-size-bigger">
        <i class="fa fa-shopping-basket"></i>
      </div>
    </div>
    <router-view
      class="order-container"
      :account-data="accountData"
      :session-data="sessionData"
      @selectRound="selectRound">
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      sessionData: {},
      accountData: require('./dataAccount.json')
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    selectRound (data) {
      this.sessionData.store = data.store
      this.sessionData.round = data.round
      this.sessionData.po = data.po
    },
    checkout () {
      this.$router.push('/order/summary')
      console.log('checkout')
    }
  },
  computed: {
    pageName () {
      let path = this.pagePath
      if (path.indexOf('round') !== -1) return 'กรุณาเลือกข้อมูลการส่ง'
      else if (path.indexOf('category/') !== -1) return 'กรุณาเลือกสินค้า'
      else if (path.indexOf('category') !== -1) return 'กรุณาเลือกหมวดสินค้า'
      else if (path.indexOf('summary') !== 'summary') return 'สรุปรายการสั่งซื้อ'
    },
    pagePath () {
      return this.$route.path.split('/order/')[1]
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
  .back,
  .checkout {
    flex-basis: $status-bar-height;
    min-width: 0px;
    margin-top: -2px;
    cursor: pointer;
  }
}
</style>
