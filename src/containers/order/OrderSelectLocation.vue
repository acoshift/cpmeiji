<template>
  <div>
    <div class="location-panel cp-block">
      <div class="cp-input-field _flex-column _no-margin cp-segment">
        <label>เลือกสถานที่</label>
        <select class="cp-input _flex-span" v-model="selectedLocation">
          <option value="" disabled selected>กรุณาเลือก...</option>
          <option value="100101">100101 - ตั้งหั๊วเสง</option>
          <option value="100102">100102 - Foodland เดอะไบรท์ พระราม 4</option>
          <option value="100103">100103 - Isetan พระราม 2</option>
          <option value="100104">100104 - Central Ladprao</option>
          <option value="100105">100105 - Central Westgate</option>
        </select>
      </div>
    </div>

    <div v-if="selectedLocation !== ''" class="time-card-container row">
      <div class="col-xs-12 cp-block">
        <TimeCard
          id="1"
          date="16 มิถุนายน 2560"
          time="12:30"
          type="เฉพาะนม"
          @select="select('1')">
        </TimeCard>
      </div>

      <div class="col-xs-12 cp-block">
        <TimeCard
          id="2"
          date="16 มิถุนายน 2560"
          time="12:30"
          @select="select('2')">
        </TimeCard>
      </div>

      <div class="col-xs-12 cp-block">
        <TimeCard
          id="3"
          date="16 มิถุนายน 2560"
          time="17:30"
          @select="select('3')">
        </TimeCard>
      </div>

      <div class="col-xs-12 cp-block">
        <TimeCard
          id="4"
          date="17 มิถุนายน 2560"
          time="17:30"
          type="นมและโยเกิร์ต"
          @select="select('4')">
        </TimeCard>
      </div>

    </div>
  </div>
</template>

<script>
import TimeCard from './TimeCard'
export default {
  name: 'OrderSelectLocation',
  components: {
    TimeCard
  },
  data () {
    return {
      selectedLocation: ''
    }
  },
  methods: {
    select (id) {
      console.log('select this', id)
      this.$emit('selectLocation', id)
      this.$router.push('/order/product')
    }
  }
}
</script>

<style scoped lang="scss">
.time-card-container {
  padding-top: 108px;
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
