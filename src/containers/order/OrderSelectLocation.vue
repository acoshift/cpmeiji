<template>
  <div>

    <div class="location-panel cp-block">
      <div v-if="role === 'sale'" class="cp-input-field _flex-column _no-margin cp-segment">
        <label>เลือกร้าน</label>
        <select class="cp-input _flex-span" v-model="selectedLocation" multiple>
          <option value="" disabled>กรุณาเลือก...</option>
          <option v-for="location in locations" :value="location">{{ location }}</option>
        </select>
      </div>

      <div v-else class="cp-input-field _flex-column _no-margin cp-segment">
        <label>ร้านของคุณ</label>
        <div>100101 - ตั้งหั๊วเสง</div>
      </div>
    </div>
    {{ locationHeight }}
    <div
      class="time-card-container row"
      :style="{ 'padding-top': locationHeight + 'px' }">
      <div v-for="(round, i) in rounds" class="col-xs-12 cp-block">
        <TimeCard
          :orderDate="round.orderDate"
          :orderTime="round.orderTime"
          :sentDate="round.sentDate"
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
      role: '',
      locationHeight: 0,
      locations: require('./location.json'),
      rounds: require('./round.json'),
      selectedLocation: [],
      selectedRound: ''
    }
  },
  created () {
    this.role = window.role || ''
  },
  mounted () {
    this.locationHeight = document.querySelector('.location-panel').clientHeight
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
      if (this.selectedLocation.length === 0) return null
      return this.locationData.filter((location) => {
        return location.name === this.selectedLocation
      })[0].round
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
