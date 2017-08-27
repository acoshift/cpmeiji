<template>
  <div>
    <div class="cp-segment cp-block">
      <div class="cp-header">
        สรุปการสั่งซื้อ
      </div>
      <div class="_flex-column">
        <div class="cp-block">ร้าน: <strong>{{ sessionData.store ? sessionData.store.name : '-' }}</strong></div>
        <div class="cp-block">รอบส่ง: <strong>{{ sessionData.round ? sessionData.round.sentDate : '-' }}</strong></div>
        <div class="cp-block">PO: <strong>{{ sessionData.po ? sessionData.po : '-' }}</strong></div>
      </div>
    </div>

    <div v-for="(category, i) in mockData" :key="i" class="cp-segment cp-block">
      <h3>{{ category.name }}</h3>
      <div class="item-container">
        <div class="item cp-block-big">
          <div><strong>สินค้า</strong></div>
          <div><strong>จำนวน</strong></div>
        </div>
        <div v-for="(item, i) in category.products" :key="i" class="item cp-block">
          <div>{{ item.title }}</div>
          <div>{{ item.quantity }}</div>
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
import SweetAlert from 'sweetalert'
export default {
  name: 'OrderSummary',
  props: {
    sessionData: {
      type: Object,
      required: true
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
      SweetAlert('สำเร็จ!', 'ออเดอร์ได้ถูกส่งแล้ว', 'success')
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
