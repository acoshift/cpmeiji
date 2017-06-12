<template>
  <div>
    <intencive-navbar></intencive-navbar>
    Intencive
    <router-view></router-view>
  </div>
</template>

<script>
import IntenciveNavbar from './IntenciveNavbar'
export default {
  name: 'Intencive',
  components: {
    IntenciveNavbar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<style scoped lang="scss">
</style>
