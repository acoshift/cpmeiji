<template>
  <div class="time-card cp-segment">
    <div class="cp-block">
      <div class="cp-block"><strong>รอบ </strong> {{ name || '-' }}</div>
      <div class="cp-block"><strong>วันที่สั่ง: </strong> {{ orderDate || '-' }}</div>
      <div class="cp-block"><strong>วันที่ส่ง: </strong> {{ sentDate || '-' }}</div>
      <div class="cp-block"><strong>สถานที่ส่ง: </strong> {{ location || '-' }}</div>
      <div class="cp-block"><strong>ผู้ส่ง: </strong> {{ sender || '-' }}</div>
    </div>
    <div class="cp-button -positive" @click="select">เลือกรอบนี้</div>
  </div>
</template>

<script>
export default {
  name: 'TimeCard',
  props: [
    'name',
    'orderDate',
    'sentDate',
    'location',
    'sender'
  ],
  data () {
    return {
    }
  },
  methods: {
    select () {
      this.$emit('select')
    }
  }
}
</script>

<style scoped lang="scss">
.time-card {
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 3px 7px rgba(50,50,93,.03), 0 2px 7px rgba(0,0,0,.03);
  border: 1px solid #efefef;
}
</style>
