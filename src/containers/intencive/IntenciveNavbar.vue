<template>
  <div class="navbar _flex-row">
    <div class="menu">AAAA</div>
    <div class="menu active">BBB</div>
    <div class="menu">CC</div>
    <div class="menu">DDDD</div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
@import '~@/styles/config.scss';
.navbar {
  height: 50px;
  >.menu {
    flex: 1;
    background-color: $color-accent;
    &.active {
      background-color: mix($color-accent, black, 85%);
    }
  }
}
</style>
