<template>
  <div
    class="time-card cp-segment"
    :class="{
      monday: orderDate === 'วันจันทร์',
      tuesday: orderDate === 'วันอังคาร',
      wednesday: orderDate === 'วันพุธ',
      thursday: orderDate === 'วันพฤหัสบดี',
      friday: orderDate === 'วันศุกร์',
      saturday: orderDate === 'วันเสาร์',
      sunday: orderDate === 'วันอาทิตย์'
    }">
    <div class="cp-block">
      <div class="cp-block"><strong>รอบการสั่ง(วัน): </strong> {{ orderDate || '-' }}</div>
      <div class="cp-block"><strong>รอบการสั่ง(เวลา): </strong> {{ orderTime || '-' }}</div>
      <div class="cp-block"><strong>รอบการส่ง: </strong> {{ sentDate || '-' }}</div>
    </div>
    <div class="cp-button -positive" @click="select">เลือกรอบนี้</div>
  </div>
</template>

<script>
export default {
  name: 'TimeCard',
  props: [
    'orderDate',
    'orderTime',
    'sentDate'
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
  &.monday {
    border-left: 6px solid yellow
  }
  &.tuesday {
    border-left: 6px solid pink
  }
  &.wednesday {
    border-left: 6px solid green
  }
  &.thursday {
    border-left: 6px solid orange
  }
  &.friday {
    border-left: 6px solid skyblue
  }
  &.saturday {
    border-left: 6px solid violet
  }
  &.sunday {
    border-left: 6px solid red
  }
}
</style>
