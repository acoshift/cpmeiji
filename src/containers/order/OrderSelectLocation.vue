<template>
  <div>

    <div class="location-panel cp-block">
      <div class="cp-input-field _flex-column _no-margin cp-segment">
        <label>เลือกสถานที่ส่ง</label>
        <select class="cp-input _flex-span" v-model="selectedLocation">
          <option value="" disabled selected>กรุณาเลือก...</option>
          <option v-for="location in locationData" :value="location.name">{{ location.name }}</option>
        </select>
      </div>
    </div>
    <div v-if="locationRound" class="time-card-container row">
      <div v-for="(round, i) in locationRound" class="col-xs-12 cp-block">
        <TimeCard
          :id="round.id"
          :name="round.name"
          :orderDate="round.orderDate"
          :sentDate="round.sentDate"
          :location="round.location"
          :sender="round.sender"
          @select="select(i)">
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
      locationData: require('./locationData.json'),
      selectedLocation: ''
    }
  },
  methods: {
    select (id) {
      console.log('select this', id)
      this.$emit('selectLocation', id)
      this.$router.push('/order/product')
    }
  },
  computed: {
    locationRound () {
      console.log(this.selectedLocation)
      if (this.selectedLocation === '') return null
      return this.locationData.filter((location) => {
        return location.name === this.selectedLocation
      })[0].round
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
