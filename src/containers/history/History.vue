<template>
  <div>
    <div class="status-bar _flex-row _bg-color-accent">
      <div
        @click="back"
        class="back _flex-row _cross-center _main-center _font-size-bigger">
        <i class="fa fa-angle-left _font-bold"></i>
      </div>
      <div class="_flex-row _cross-center _flex-span" @click="back">
        <h4 class="_no-margin">ประวัติออเดอร์</h4>
      </div>
    </div>

    <div class="content-container cp-block-big">
      <div class="cp-block-big"></div>
      <div class="cp-block-big grid-container">
        <input class="cp-input" type="text" placeholder="ค้นหาหมายเลข PO">
        <div class="cp-button -info cp-side-space">ค้นหา</div>
      </div>
      <div class="grid-container">
        <table class="small-table-font">
          <thead>
            <th>หมายเลข PO</th>
            <th>ผู้สั่ง</th>
            <th>สั่งเมื่อ</th>
            <th>รอบส่ง</th>
            <th>สถานะ</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td data-column="หมายเลข PO"><a href="#" class="cp-link _font-bold">11222121</a></td>
              <td data-column="ผู้สั่ง">สมพร</td>
              <td data-column="สั่งเมื่อ">16/07/60 09:30</td>
              <td data-column="รอบส่ง">18/07/60 10:30</td>
              <td data-column="สถานะ" style="min-width: 120px">Open</td>
              <td data-column="" style="min-width: 120px; padding-left: 10px">
                <div class="cp-button -positive">แก้ไข</div>
              </td>
            </tr>
            <tr>
              <td data-column="หมายเลข PO"><a href="#" class="cp-link _font-bold">12234534</a></td>
              <td data-column="ผู้สั่ง">สมหมาย</td>
              <td data-column="สั่งเมื่อ">16/07/60 09.32</td>
              <td data-column="รอบส่ง">19/07/60 10.30</td>
              <td data-column="สถานะ" style="min-width: 120px">Finished</td>
              <td data-column="" style="min-width: 120px"></td>
            </tr>
            <tr>
              <td data-column="หมายเลข PO"><a href="#" class="cp-link _font-bold">14564543</a></td>
              <td data-column="ผู้สั่ง">สมปอง</td>
              <td data-column="สั่งเมื่อ">16/07/60 09.32</td>
              <td data-column="รอบส่ง">19/07/60 10.30</td>
              <td data-column="สถานะ" style="min-width: 120px">Finished</td>
              <td data-column="" style="min-width: 120px"></td>
            </tr>
            <tr>
              <td data-column="หมายเลข PO"><a href="#" class="cp-link _font-bold">14356742</a></td>
              <td data-column="ผู้สั่ง">สมภพ</td>
              <td data-column="สั่งเมื่อ">17/07/60 09.32</td>
              <td data-column="รอบส่ง">20/07/60 10.30</td>
              <td data-column="สถานะ" style="min-width: 120px">Finished</td>
              <td data-column="" style="min-width: 120px"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'History',
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
