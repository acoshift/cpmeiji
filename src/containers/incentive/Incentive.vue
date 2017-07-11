<template>
  <div class="incentive">
    <div class="incentive-status-bar _flex-row _bg-color-accent">
      <div
        @click="back"
        class="back _flex-row _cross-center _main-center _font-size-bigger">
        <i class="fa fa-angle-left _font-bold"></i>
      </div>
      <div class="_flex-row _cross-center _flex-span">
        <h4 class="_no-margin">{{ menuName }}</h4>
      </div>
      <div
        class="checkout _flex-row _cross-center _main-center _font-size-bigger">
        <i class="fa fa-address-card-o"></i>
      </div>
      <div
        class="checkout _flex-row _cross-center _main-center _font-size-bigger">
        <i class="fa fa-file-text-o"></i>
      </div>
    </div>
    <incentive-navbar></incentive-navbar>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import IncentiveNavbar from './IncentiveNavbar'
export default {
  name: 'Incentive',
  components: {
    IncentiveNavbar
  },
  data () {
    return {}
  },
  methods: {
    back () {
      this.$router.push('/menu')
    }
  },
  computed: {
    menuName () {
      if (this.$route.path.split('/incentive/')[1] === 'checkin') {
        return 'กิจกรรม'
      } else if (this.$route.path.split('/incentive/')[1] === 'history') {
        return 'ประวิติกิจกรรม'
      } else if (this.$route.path.split('/incentive/')[1] === 'reward') {
        return 'รางวัล'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.incentive {
  background: white;
}
.incentive-status-bar {
  z-index: 100;
  position: fixed;
  width: 100%;
  color: white;
  height: 45px;
  .back,
  .checkout {
    flex-basis: 45px;
    min-width: 0px;
    margin-top: -2px;
    cursor: pointer;
  }
}
.view {
  padding-top: 95px;
}
</style>
