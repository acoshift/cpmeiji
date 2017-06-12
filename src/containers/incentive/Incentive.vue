<template>
  <div>
    <div class="incentive-status-bar _flex-row _bg-color-accent">
      <div
        @click="back"
        class="back _flex-row _cross-center _main-center _font-size-bigger">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="_flex-row _cross-center">
        <h4 class="_no-margin">{{ menu }}</h4>
      </div>
    </div>
    <incentive-navbar></incentive-navbar>
    Incentive
    <router-view></router-view>
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
    return {
      menu: 'History'
    }
  },
  methods: {
    back () {
      this.$router.push('/menu')
    }
  }
}
</script>

<style scoped lang="scss">
.incentive-status-bar {
  height: 40px;
  color: white;
  .back {
    flex-basis: 40px;
    min-width: 0px;
  }
}
</style>
