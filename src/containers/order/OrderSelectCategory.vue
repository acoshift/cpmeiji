<template>
  <div>
    <div class="product-panel cp-block">
      <div class="cp-input-field _flex-column _no-margin" style="padding: 12px 16px">
        <div>ร้าน: <strong v-if="shop">{{ shop.name }}</strong></div>
        <div>รอบส่ง: <strong v-if="period">{{ period.send.dateName || '-' }}</strong></div>
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
      <div v-for="category in accountData.blocks" :key="category.id" class="col-xs-12 cp-block">
        <router-link :to="`category/${category.id}`">
          <CategoryCard
            :categoryId="category.id"
            :categoryTitle="category.title"
            :categoryItemNum="category.products.length">
          </CategoryCard>
        </router-link>
      </div>
      <div class="col-xs-12 cp-block">
        <router-link :to="`category/all`">
          <CategoryCard
            categoryId="all"
            categoryTitle="สินค้าทั้งหมด"
            :categoryItemNum="allProductBlockData.length">
          </CategoryCard>
        </router-link>
      </div>
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
    accountData: {
      type: Object,
      required: true
    },
    sessionData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      allProductBlockData: require('./dataProduct.json')
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
      .flatMap((data) => this.$api.getShop(data.shop))
      .share()
    return {
      shop: shop$
        .map((x) => x.shop),
      period: shop$
        .map((x) => x.periods)
        .map(_.find({ id: this.sessionData.period }))
        .do(console.log)
    }
  },
  methods: {
    select (id, variant, quantity) {
      console.log('select this', id)
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
