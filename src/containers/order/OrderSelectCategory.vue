<template>
  <div>
    <div class="product-panel cp-block">
      <div class="cp-input-field _flex-column _no-margin" style="padding: 12px 16px">
        <div>ร้าน: <strong>{{ sessionData.shop.name }}</strong></div>
        <div>วันส่ง: <strong>{{ sessionData.period.date || '-' }}</strong></div>
        <div>รอบส่ง: <strong>{{ sessionData.period.sendDate || '-' }}</strong></div>
        <div>PO: <strong>{{ sessionData.po ? sessionData.po : '-' }}</strong></div>
      </div>

      <!--<div class="_flex-row _main-end cp-block">
        <div class="_flex-row cp-side-space-bigger">
          <input id="tax" class="cp-input" type="checkbox">
          <label for="tax" class="cp-label-inline">มี Vat</label>
        </div>
        <div class="_flex-row cp-side-space-bigger">
          <input id="notax" class="cp-input" type="checkbox">
          <label for="notax" class="cp-label-inline">ไม่มี Vat</label>
        </div>
      </div>-->

    </div>

    <div class="product-card-container row">
      <div v-for="(x, k) in blocks" :key="k" class="col-xs-12 cp-block">
        <CategoryCard
          @click.native="selectBlock(k)"
          :categoryId="k"
          :categoryTitle="x[0].block.name">
        </CategoryCard>
      </div>
      <!-- <div class="col-xs-12 cp-block">
        <router-link :to="`category/all`">
          <CategoryCard
            categoryId="all"
            categoryTitle="สินค้าทั้งหมด"
            :categoryItemNum="allProductBlockData.length">
          </CategoryCard>
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
import CategoryCard from './CategoryCard'
import _ from 'lodash/fp'

export default {
  name: 'OrderSelectCategory',
  components: {
    CategoryCard
  },
  props: {
    sessionData: {
      type: Object,
      required: true
    }
  },
  created () {
    if (!this.sessionData) {
      this.$router.push('/order/period')
    }
  },
  subscriptions () {
    const shop$ = this.$watchAsObservable('sessionData', { immediate: true })
      .pluck('newValue')
      .filter(Boolean)
      .flatMap((data) => this.$api.getShop(data.shop.id))
      .share()
    return {
      blocks: shop$
        .map((x) => x.items)
        .map(_.groupBy((x) => x.block.id))
        .do(console.log)
    }
  },
  methods: {
    select (id, variant, quantity) {
      console.log('select this', id)
    },
    selectBlock (id) {
      this.$emit('selectBlock', id)
    }
  }
}
</script>

<style scoped lang="scss">
.product-card-container {
  padding-top: 90px;
}
.product-panel {
  position: fixed;
  z-index: 99;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ececec;
  box-shadow: 0 3px 7px rgba(50,50,93,.03), 0 2px 7px rgba(0,0,0,.03);
}
</style>
