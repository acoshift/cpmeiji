<template>
  <div>
    <!-- <div class="product-panel cp-block cp-segment">
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
    </div> -->
    <div class="product-card-container row">
      <!--<div class="col-xs-12 cp-block">
        <div class="cp-button -primary">กลับไปเลือกหมวดหมู่</div>
      </div>-->
      <div v-for="x in productList" :key="x.id" class="col-xs-12 cp-block">
        <ProductCard
          :code="x.ProductCode"
          :name="x.ProductName"
          :vat="x.isVat"
          :quantity="getProductQuantity(x.ShopPriceMPId)"
          @add="(v) => add(x.ShopPriceMPId, v)">
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
      selectedType: 'all',
      sessionProduct: {}
    }
  },
  subscriptions () {
    return {
      products: this.$api.listProducts(this.sessionData.shop.id, this.sessionData.blockId)
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
  watch: {
    sessionData: {
      handler () {
        if (!this.sessionData) this.sessionProduct = {}
        if (!this.sessionData.product) this.sessionProduct = {}
        this.sessionProduct = this.sessionData.product
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    add (id, v) {
      this.$emit('addProduct', id, v)
    },
    getProductQuantity (id) {
      return this.sessionProduct[id] || 0
    }
  }
}
</script>

<style scoped lang="scss">
.product-card-container {
  // padding-top: 60px;
  padding-top: 10px;
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
