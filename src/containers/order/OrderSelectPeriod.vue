<template>
  <div>

    <div class="location-panel cp-block">
      <div class="cp-input-field _flex-column _no-margin cp-segment">
        <label>ร้านของคุณ</label>
        <select class="cp-input _flex-span" v-model="selectedShop">
          <option value="" disabled>กรุณาเลือก...</option>
          <option v-for="x in shops" :key="x.id" :value="x.id">{{ x.name }}</option>
        </select>
      </div>

    </div>
    <div
      v-if="detail"
      class="time-card-container row"
      style="padding-top: 110px">
      <div v-for="x in detail.periods" :key="x.id" class="col-xs-12 cp-block">
        <TimeCard
          :orderDate="x.order.dateName"
          :orderTime="x.order.time"
          :sentDate="x.send.dateName"
          @select="select(x)">
        </TimeCard>
      </div>
    </div>

  </div>
</template>

<script>
import SweetAlert from 'sweetalert'
import TimeCard from './TimeCard'

export default {
  name: 'OrderSelectPeriod',
  components: {
    TimeCard
  },
  props: {
    accountData: {
      type: Object,
      required: true
    },
    sessionData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      selectedShop: ''
    }
  },
  subscriptions () {
    return {
      shops: this.$api.listShops().do(console.log),
      detail: this.$watchAsObservable('selectedShop')
        .pluck('newValue')
        .filter(Boolean)
        .flatMap((shopId) => this.$api.getShop(shopId))
        .do(console.log)
    }
  },
  methods: {
    select (period) {
      SweetAlert({
        title: 'กรุณาใส่เลข PO',
        type: 'input',
        showCancelButton: true,
        closeOnConfirm: true,
        inputPlaceholder: 'เลข PO ของคุณ',
        cancelButtonText: 'ยกเลิก',
        confirmButtonText: 'ยืนยัน'
      }, (inputValue) => {
        if (inputValue) {
          this.$emit('selectPeriod', {
            shop: this.selectedShop,
            period: period.id,
            po: inputValue
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.time-card-container {
  padding-top: 90px;
}
.location-panel {
  position: fixed;
  z-index: 99;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ececec;
  box-shadow: 0 3px 7px rgba(50,50,93,.03), 0 2px 7px rgba(0,0,0,.03);
}
</style>
