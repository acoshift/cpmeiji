<template>
  <div class="time-card cp-segment">
    <div class="cp-block">
      <div class="cp-block"><strong>รหัสเมจิ: </strong> {{ code || '-' }}</div>
      <div class="cp-block"><strong>ชื้อสินค้า: </strong> {{ name || '-' }}</div>
      <!-- <div class="cp-block"><strong>Vat: </strong> {{ vat ? 'มี' : 'ไม่มี' }}</div> -->
    </div>
    <div class="_flex-row">
      <div class="decrease" @click="removeOne" :class="{disabled: quantity <= 0}">-1</div>
      <div class="decrease" @click="removeTen" :class="{disabled: quantity < 10}">-10</div>
      <input class="q-input cp-input _align-center" type="number" min="0" v-model="customQuantity">
      <div class="increase" @click="addOne">+1</div>
      <div class="increase" @click="addTen">+10</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['code', 'name', 'vat', 'quantity'],
  data () {
    return {
      customQuantity: this.quantity
    }
  },
  watch: {
    quantity () {
      this.customQuantity = this.quantity
    }
  },
  methods: {
    select () {
      this.$emit('select')
    },
    addOne () {
      this.$emit('add', 1)
    },
    addTen () {
      this.$emit('add', 10)
    },
    removeOne () {
      this.$emit('add', -1)
    },
    removeTen () {
      this.$emit('add', -10)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/styles/config.scss';
.time-card {
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 3px 7px rgba(50,50,93,.03), 0 2px 7px rgba(0,0,0,.03);
  border: 1px solid #efefef;
}
.decrease,
.increase {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  min-width: 36px;
  height: 36px;
  border: 2px solid;
  flex: 0 0 auto;
  user-select: none;
  cursor: pointer;
  &.disabled {
    opacity: .2;
    color: gray;
    border-color: gray;
    pointer-events: none;
  }
}
.increase {
  border-color: $color-positive;
  color: $color-positive;
  &:nth-child(4) {
    margin-left: 4px;
    border-right-width: 1px;
  }
  &:nth-child(5) {
    border-left-width: 1px;
  }
}
.decrease {
  border-color: $color-negative;
  color: $color-negative;
  &:nth-child(1) {
    border-right-width: 1px;
  }
  &:nth-child(2) {
    border-left-width: 1px;
    margin-right: 4px;
  }
}
.time-card .q-input {
  border-radius: 0;
  border-width: 2px;
  min-width: 0;
  flex: 1;
}
</style>
