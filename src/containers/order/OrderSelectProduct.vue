<template>
  <div>
    <div class="product-panel cp-block cp-segment">
      <div class="_flex-row _main-end">
        <!--<div class="_flex-row cp-side-space-bigger">
          <input id="tax" v-model="selectedType" value="all" name="type" class="cp-input" type="radio">
          <label for="tax" class="cp-label-inline">ทั้งหมด</label>
        </div>-->
        <div class="_flex-row cp-side-space-bigger">
          <input id="tax"  v-model="selectedType" value="tax" name="type" class="cp-input" type="radio">
          <label for="tax" class="cp-label-inline">มี Vat</label>
        </div>
        <div class="_flex-row cp-side-space-bigger">
          <input id="notax"  v-model="selectedType" value="untax" name="type" class="cp-input" type="radio">
          <label for="notax" class="cp-label-inline">ไม่มี Vat</label>
        </div>
      </div>
    </div>
    <div class="product-card-container row">
      <!--<div class="col-xs-12 cp-block">
        <div class="cp-button -primary">กลับไปเลือกหมวดหมู่</div>
      </div>-->
      <div v-for="(product, i) in productList" :key="i" class="col-xs-12 cp-block">
        <ProductCard
          :code="product.code"
          :name="product.title"
          :vat="product.vat"
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
      selectedType: 'all'
    }
  },
  subscriptions () {
    return {
      products: this.$api.listProducts().do(console.log)
    }
  },
  computed: {
    productList () {
      let categoryId = this.$route.params.categoryId
      let productList = this.accountData.blocks.filter(x => x.id === categoryId)
      return productList.length ? productList[0].products : []
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
