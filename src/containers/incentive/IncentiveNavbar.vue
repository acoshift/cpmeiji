<template>
  <div class="navbar _flex-row">
    <router-link
      to="/incentive/checkin"
      class="menu _flex-row _main-center _cross-center _font-size-bigger"
      active-class="active">
      <i class="fa fa-map-marker"></i>
    </router-link>
    <router-link
      to="/incentive/history"
      class="menu _flex-row _main-center _cross-center _font-size-bigger"
      active-class="active">
      <i class="fa fa-history"></i>
    </router-link>
    <router-link
      to="/incentive/reward"
      class="menu _flex-row _main-center _cross-center _font-size-bigger"
      active-class="active">
      <i class="fa fa-smile-o"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'IncentiveNavbar'
}
</script>

<style scoped lang="scss">
@import '~@/styles/config.scss';
.navbar {
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  z-index: 5;
  margin-top: 45px;
  height: 50px;
  box-shadow: 0 3px 7px rgba(50,50,93,.06), 0 2px 7px rgba(0,0,0,.06);
  >.menu {
    flex: 1;
    background-color: $color-accent;
    color: mix($color-accent, black, 65%);
    &.active {
      background-color: mix($color-accent, black, 85%);
      color: white;
    }
  }
}
</style>
