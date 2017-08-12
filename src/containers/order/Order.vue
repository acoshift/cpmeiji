<template>
  <div>
    <div class="status-bar _flex-row _bg-color-accent">
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
      class="content-container"
      :account-data="accountData"
      :session-data="sessionData"
      @selectPeriod="selectPeriod">
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
    selectPeriod (data) {
      this.sessionData.store = data.store
      this.sessionData.period = data.period
      this.sessionData.po = data.po
      this.$router.push('/order/category')
    },
    checkout () {
      this.$router.push('/order/summary')
      console.log('checkout')
    }
  },
  computed: {
    pageName () {
      let path = this.pagePath
      if (path.indexOf('period') !== -1) return 'กรุณาเลือกข้อมูลการส่ง'
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
