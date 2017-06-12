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
  height: 50px;
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
