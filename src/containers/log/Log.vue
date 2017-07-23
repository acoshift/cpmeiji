<template>
  <div>
    <div class="status-bar _flex-row _bg-color-accent">
      <div
        @click="back"
        class="back _flex-row _cross-center _main-center _font-size-bigger">
        <i class="fa fa-angle-left _font-bold"></i>
      </div>
      <div class="_flex-row _cross-center _flex-span">
        <h4 class="_no-margin">ประวัติการใช้งาน</h4>
      </div>
    </div>

    <div class="content-container">
      <div class="cp-container">
        ASA
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Log',
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
