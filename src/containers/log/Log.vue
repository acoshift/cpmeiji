<template>
  <div>
    <div class="status-bar _flex-row _bg-color-accent">
      <div
        @click="back"
        class="back _flex-row _cross-center _main-center _font-size-bigger">
        <i class="fa fa-angle-left _font-bold"></i>
      </div>
      <div class="_flex-row _cross-center _flex-span" @click="back">
        <h4 class="_no-margin">ประวัติการใช้งาน</h4>
      </div>
    </div>

    <div class="content-container cp-block-big">
      <div class="cp-block-big"></div>
      <div class="grid-container">
        <table class="small-table-font">
          <thead>
            <th>การกระทำ</th>
            <th>ผู้ใช้</th>
            <th>เวลา</th>
            <th>รายละเอียด</th>
          </thead>
          <tbody>
            <tr>
              <td data-column="การกระทำ">Login</td>
              <td data-column="ผู้ใช้">สมพร</td>
              <td data-column="เวลา">09:30</td>
              <td data-column="รายละเอียด" style="min-width: 120px">PO:12311221</td>
            </tr>
            <tr>
              <td data-column="การกระทำ">Order</td>
              <td data-column="ผู้ใช้">สมหมาย</td>
              <td data-column="เวลา">09.32</td>
              <td data-column="รายละเอียด" style="min-width: 120px">PO:12113343</td>
            </tr>
            <tr>
              <td data-column="การกระทำ">Order</td>
              <td data-column="ผู้ใช้">ประเสริฐ</td>
              <td data-column="เวลา">10:16</td>
              <td data-column="รายละเอียด" style="min-width: 120px">PO:21131223</td>
            </tr>
            <tr>
              <td data-column="การกระทำ">Login</td>
              <td data-column="ผู้ใช้">สมพงศ์</td>
              <td data-column="เวลา">11.30</td>
              <td data-column="รายละเอียด" style="min-width: 120px">PO:81123112</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Log',
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
