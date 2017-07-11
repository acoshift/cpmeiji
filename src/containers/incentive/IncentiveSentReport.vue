<template>
  <div class="sent-report">
    <div class="user-info cp-segment _flex-row _main-space-between">
      <div><strong>นายประเสริฐ บุญส่ง</strong></div>
      <div class="_align-right">
        <div><strong>PC-1234</strong></div>
        <div><small>17/03/2557</small></div>
      </div>
    </div>

    <div>
      <div class="data-info cp-segment">
        <div class="cp-input-field cp-block _flex-row _cross-center">
          <label class="_no-margin">ชื่อ:</label>
          <select class="cp-input _flex-span" v-model="select1">
            <option value="" disabled>กรุณาเลือก...</option>
            <option value="a1">ฉัตรชัย ศิริพรประสาน</option>
            <option value="a2">ประเสริฐ บุญส่ง</option>
          </select>
        </div>
        <div class="cp-input-field cp-block _flex-row _cross-center">
          <label class="_no-margin">ห้าง:</label>
          <select class="cp-input _flex-span" v-model="select2">
            <option value="" disabled>กรุณาเลือก...</option>
            <option value="b1">10020 - The Mall Ladprao</option>
            <option value="b2">10021 - The Mall Bang na</option>
            <option value="b3">10022 - The Mall Bang kapi</option>
          </select>
        </div>
        <div class="cp-input-field _flex-row _cross-center" style="margin: 0">
          <label class="_no-margin">รอบ:</label>
          <select class="cp-input _flex-span" v-model="select3">
            <option value="" disabled>กรุณาเลือก...</option>
            <option value="c1">มิถุนายน 1/4</option>
            <option value="c2">กรกฏาคม 1/4</option>
            <option value="c3">มสิงหาคม 1/4</option>
          </select>
        </div>
      </div>
    </div>
    <div style="padding-left: 16px; margin-bottom: 8px">
      <h4 class="_no-margin">ผลรายงาน</h4>
    </div>
    <div class="item _flex-row _main-space-between">
      <div>รายการสต๊อกของ</div>
      <div>20</div>
    </div>
    <div class="item _flex-row _main-space-between">
      <div>รายงานสภาวะการตลาดและปัญหา</div>
      <div>20</div>
    </div>
    <div class="item _flex-row _main-space-between">
      <div>รายงานตั้งพื้นที่พิเศษ</div>
      <div>20</div>
    </div>
    <div class="item _flex-row _main-space-between">
      <div>รายงานกิจกรรมคู่แข่ง</div>
      <div>20</div>
    </div>
    <div class="item _flex-row _main-space-between">
      <div>คุณภาพการจัดเรียง</div>
      <div>20</div>
    </div>
    <div class="item _flex-row _main-space-between">
      <div>แต่งกายไม่ถูกต้อง</div>
      <div>20</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'IncentiveSentReport',
  data () {
    return {
      select1: 'a1',
      select2: 'b1',
      select3: 'c1'
    }
  }
}
</script>

<style scoped lang="scss">
.sent-report {
  padding-top: 95px;
}

.data-info {
  label {
    flex-basis: 38px;
    width: 38px;
  }
}

.item {
  padding: 16px;
  border-bottom: 1px solid #ededed;
  &:nth-child(4) {
    border-top: 1px solid #ededed;
  }
}
</style>
