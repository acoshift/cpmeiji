<template>
  <div>
    <div class="cp-segment cp-block">
      <div class="cp-header">
        สรุปการสั่งซื้อ
      </div>
      <div class="_flex-column">
        <div class="cp-block">ร้าน: <strong>{{ sessionData.shop.name }}</strong></div>
        <div class="cp-block">วันส่ง: <strong>{{ sessionData.period.date }}</strong></div>
        <div class="cp-block">รอบส่ง: <strong>{{ sessionData.period.sendDate }}</strong></div>
        <div class="cp-block">PO: <strong>{{ sessionData.po ? sessionData.po : '-' }}</strong></div>
      </div>
    </div>

    <!-- <div v-for="(category, i) in mockData" :key="i" class="cp-segment cp-block">
      <h3>{{ category.name }}</h3>
      <div class="item-container">
        <div class="item cp-block-big">
          <div><strong>สินค้า</strong></div>
          <div><strong>จำนวน</strong></div>
        </div>
        <div v-for="x in productList" :key="x.productId" class="item cp-block">
          <div>{{ x.name }}</div>
          <div>{{ x.name }}</div>
        </div>
      </div>
    </div> -->
    <div class="cp-segment cp-block">
      <div class="item-container">
        <div class="item cp-block-big">
          <div><strong>สินค้า</strong></div>
          <div><strong>จำนวน</strong></div>
        </div>
        <div v-for="x in productList" :key="x.ShopPriceMPId" class="item cp-block">
          <div>{{ x.ProductName }}</div>
          <div>{{ x.quantity }}</div>
        </div>
      </div>
    </div>
    <div class="cp-segment">
      <div class="cp-button -primary" @click="placeOrder">
        สั่งสินค้า
      </div>
    </div>
  </div>
</template>

<script>
import map from 'lodash/map'
import find from 'lodash/find'

export default {
  name: 'OrderSummary',
  props: {
    sessionData: {
      type: Object,
      required: true
    }
  },
  subscriptions () {
    return {
      products: this.$api.listProducts(this.sessionData.shop.id, this.sessionData.blockId)
    }
  },
  computed: {
    productList () {
      if (!this.products) return []
      return map(this.sessionData.product, (v, k) => {
        console.log(this.products)
        console.log(find(this.products, { ShopPriceMPId: +k }))
        return { ...find(this.products, { ShopPriceMPId: +k }), quantity: v }
      })
    }
  },
  data () {
    return {
      mockData: [
        {
          name: 'block 1',
          products: [
            {
              code: '110001',
              title: 'นมเปรี้ยวพร้อมดื่ม รสน้ำผึ้ง',
              vat: true,
              quantity: 10
            },
            {
              code: '110002',
              title: 'นมเปรี้ยวพร้อมดื่ม รสน้ำผึ้ง',
              vat: false,
              quantity: 20
            },
            {
              code: '110003',
              title: 'นมเปรี้ยวพร้อมดื่ม รสธรรมชาติ',
              vat: true,
              quantity: 5
            },
            {
              code: '110004',
              title: 'นมเปรี้ยวพร้อมดื่ม รสธรรมชาติ',
              vat: false,
              quantity: 2
            }
          ]
        },
        {
          name: 'block 2',
          products: [
            {
              code: '110002',
              title: 'นมเปรี้ยวพร้อมดื่ม รสน้ำผึ้ง',
              vat: false,
              quantity: 20
            },
            {
              code: '110004',
              title: 'นมเปรี้ยวพร้อมดื่ม รสธรรมชาติ',
              vat: false,
              quantity: 2
            }
          ]
        },
        {
          name: 'อื่นๆ',
          products: [
            {
              code: '110003',
              title: 'นมเปรี้ยวพร้อมดื่ม รสธรรมชาติ',
              vat: true,
              quantity: 5
            },
            {
              code: '110004',
              title: 'นมเปรี้ยวพร้อมดื่ม รสธรรมชาติ',
              vat: false,
              quantity: 2
            }
          ]
        }
      ]
    }
  },
  methods: {
    placeOrder () {
      this.$emit('doCheckout')
    }
  }
}
</script>

<style scoped lang="scss">
.cp-segment {
  background: white;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
