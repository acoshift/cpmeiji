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
      class="time-card-container row"
      style="padding-top: 110px">
      <div v-for="(round, i) in roundData" :key="i" class="col-xs-12 cp-block">
        <TimeCard
          :orderDate="round.orderDate"
          :orderTime="round.orderTime"
          :sentDate="round.sentDate"
          @select="select(round)">
        </TimeCard>
      </div>
    </div>

  </div>
</template>

<script>
import SweetAlert from 'sweetalert'
import TimeCard from './TimeCard'

export default {
  name: 'OrderSelectRound',
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
      roundData: require('./dataRound.json'),
      selectedShop: ''
    }
  },
  subscriptions () {
    return {
      shops: this.$api.listShops().do(console.log)
    }
  },
  methods: {
    select (round) {
      SweetAlert({
        title: 'กรุณาใส่เลข PO',
        type: 'input',
        showCancelButton: true,
        closeOnConfirm: true,
        inputPlaceholder: 'เลข PO ของคุณ',
        cancelButtonText: 'ยกเลิก',
        confirmButtonText: 'ยืนยัน'
      }, (inputValue) => {
        if (inputValue && inputValue !== '') {
          this.$emit('selectRound', {
            store: this.selectedShop,
            round: round,
            po: inputValue
          })
          this.$router.push('/order/category')
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
