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
      :session-data="sessionData"
      @selectPeriod="selectPeriod"
      @selectBlock="selectBlock"
      @addProduct="addProduct"
      @doCheckout="doCheckout">
    </router-view>
  </div>
</template>

<script>
import map from 'lodash/map'
import SweetAlert from 'sweetalert'

export default {
  name: 'Order',
  data () {
    return {
      sessionData: {}
    }
  },
  created () {
    try {
      this.sessionData = JSON.parse(window.localStorage.getItem('sessionData')) || {}
    } catch (err) {}
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    selectPeriod (data) {
      this.sessionData.shop = data.shop
      this.sessionData.period = data.period
      this.sessionData.po = data.po
      this.sessionData.product = {}
      this.sessionData.blockId = null
      window.localStorage.setItem('sessionData', JSON.stringify(this.sessionData))
      this.$router.push('/order/category')
    },
    checkout () {
      this.$router.push('/order/summary')
      console.log('checkout')
    },
    doCheckout () {
      console.log(this.sessionData)
      this.$api.checkout({
        'Order': {
          'ShopId': this.sessionData.shop,
          'PONumber': this.sessionData.po
        },
        'OrderItems': map(this.sessionData.product, (v, k) => ({
          'OrderItemId': k,
          'Quantity': v
        }))
      })
        .subscribe(
          () => {
            SweetAlert('สำเร็จ!', 'ออเดอร์ได้ถูกส่งแล้ว', 'success')
            this.$router.push('/')
          }
        )
    },
    selectBlock (id) {
      this.sessionData.blockId = id
      this.sessionData.product = {}
      window.localStorage.setItem('sessionData', JSON.stringify(this.sessionData))
      this.$router.push('/order/category/' + id)
    },
    addProduct (id, v) {
      if (!this.sessionData.product) {
        this.sessionData.product = {}
      }
      if (!this.sessionData.product[id]) {
        this.$set(this.sessionData.product, id, 0)
      }
      this.$set(this.sessionData.product, id, this.sessionData.product[id] + v)
      window.localStorage.setItem('sessionData', JSON.stringify(this.sessionData))
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
