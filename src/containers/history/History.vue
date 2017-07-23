<template>
  <div>
    History
  </div>
</template>

<script>
export default {
  name: 'History',
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
