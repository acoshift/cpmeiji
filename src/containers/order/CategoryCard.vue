<template>
  <div class="category-card cp-segment">
    <div class="">
      <div class="cp-block"><h3 class="_color-accent">{{ categoryTitle || '-' }}</h3></div>
      <!-- <div class=""><strong>จำนวนสินค้า: </strong> {{ categoryItemNum || '-' }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: ['categoryTitle'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.category-card {
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 3px 7px rgba(50,50,93,.03), 0 2px 7px rgba(0,0,0,.03);
  border: 1px solid #efefef;
}
</style>
