<template>
  <div>
    <div class="product-panel cp-block cp-segment">
      <div class="_flex-row _main-end">
        <div class="_flex-row cp-side-space-bigger">
          <input id="alltax" v-model="selectedType" value="all" name="type" class="cp-input" type="radio">
          <label for="alltax" class="cp-label-inline">ทั้งหมด</label>
        </div>
        <div class="_flex-row cp-side-space-bigger">
          <input id="tax"  v-model="selectedType" value="vat" name="type" class="cp-input" type="radio">
          <label for="tax" class="cp-label-inline">มี Vat</label>
        </div>
        <div class="_flex-row cp-side-space-bigger">
          <input id="notax"  v-model="selectedType" value="novat" name="type" class="cp-input" type="radio">
          <label for="notax" class="cp-label-inline">ไม่มี Vat</label>
        </div>
      </div>
    </div>
    <div class="product-card-container row">
      <!--<div class="col-xs-12 cp-block">
        <div class="cp-button -primary">กลับไปเลือกหมวดหมู่</div>
      </div>-->
      <div v-for="x in productList" :key="x.id" class="col-xs-12 cp-block">
        <ProductCard
          :code="x.productCode"
          :name="x.productName"
          :vat="x.isVat"
          :quantity="0">
        </ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
export default {
  name: 'OrderSelectProduct',
  components: {
    ProductCard
  },
  props: {
    sessionData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      selectedType: 'all'
    }
  },
  subscriptions () {
    return {
      products: this.$api.listProductsFromBlock(this.sessionData.blockId)
    }
  },
  computed: {
    productList () {
      if (!this.products) return []
      return this.products.filter((x) => {
        if (this.selectedType === 'vat') {
          return !!x.isVat
        }
        if (this.selectedType === 'novat') {
          return !x.isVat
        }
        return true
      })
    }
  },
  methods: {
    addOne (product) {
      console.log('ADD one', product)
    },
    addTen (product) {
      console.log('ADD ten', product)
    }
  }
}
</script>

<style scoped lang="scss">
.product-card-container {
  padding-top: 60px;
}
.product-panel {
  box-sizing: border-box;
  position: fixed;
  z-index: 99;
  width: 100vw;
  background-color: white;
  border-bottom: 1px solid #ececec;
  box-shadow: 0 3px 7px rgba(50,50,93,.03), 0 2px 7px rgba(0,0,0,.03);
}
</style>
