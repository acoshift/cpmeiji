<template>
  <div>
    <div class="product-panel cp-block">
      <div class="cp-input-field _flex-column _no-margin" style="padding: 12px 16px">
        <div>ร้าน: ตั้งหั๊วเสง</div>
      </div>

      <div class="cp-input-field _flex-column _no-margin cp-segment" style="padding-top: 0px">
        <label>เลือกประเภทสินค้า</label>
        <select class="cp-input _flex-span" v-model="selectedCategory">
          <!--<option value="" disabled selected>กรุณาเลือก...</option>-->
          <option value="100101">ทั้งหมด</option>
          <option value="100101">นมสด</option>
          <option value="100103">โยเกิร์ตพร้อมดื่ม</option>
        </select>
      </div>

      <div class="_flex-row _main-end cp-block">
        <div class="_flex-row cp-side-space-bigger">
          <input id="tax" class="cp-input" type="checkbox">
          <label for="tax" class="cp-label-inline">มี Tax</label>
        </div>
        <div class="_flex-row cp-side-space-bigger">
          <input id="notax" class="cp-input" type="checkbox">
          <label for="notax" class="cp-label-inline">ไม่มี Tax</label>
        </div>
      </div>

    </div>

    <div v-if="selectedCategory !== ''" class="product-card-container row">
      <div class="col-xs-12 cp-block">
        <ProductCard
          id="1"
          code="112100"
          name="นมสด 200 cc"
          variant="รสจืด, รสโกโก้"
          @select="select('1')">
        </ProductCard>
      </div>

      <div class="col-xs-12 cp-block">
        <ProductCard
          id="2"
          code="112101"
          name="นมสด 350 cc"
          variant="รสจืด, รสโกโก้, รสหวาน"
          @select="select('1')">
        </ProductCard>
      </div>

      <div class="col-xs-12 cp-block">
        <ProductCard
          id="2"
          code="112104"
          name="โยเกิร์ตพร้อมดื่ม บัลแกเลีย"
          variant="-"
          @select="select('1')">
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
  data () {
    return {
      selectedCategory: '100101'
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
  padding-top: 155px;
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
