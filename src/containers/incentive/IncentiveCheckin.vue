<template>
  <div class="checkin">

    <div class="user-info cp-segment _flex-row _main-space-between">
      <div><strong>นายประเสริฐ บุญส่ง</strong></div>
      <div class="_align-right">
        <div><strong>PC-1234</strong></div>
        <div><small>17/03/2557</small></div>
      </div>
    </div>

    <div class="location-info cp-segment">
      <div class="cp-input-field cp-block _flex-row _cross-center">
        <label class="_no-margin">ห้าง:</label>
        <select class="cp-input _flex-span" v-model="select1">
          <option value="" disabled>กรุณาเลือก...</option>
          <option value="sdsds">The Mall</option>
          <option value="sdsds">Central</option>
          <option value="sdsds">Lotus</option>
        </select>
      </div>
      <div class="cp-input-field cp-block _flex-row _cross-center">
        <label class="_no-margin">ร้าน:</label>
        <select class="cp-input _flex-span" v-model="select2">
          <option value="" disabled>กรุณาเลือก...</option>
          <option value="sdsds">10020 - The Mall Ladprao</option>
          <option value="sdsds">10021 - The Mall Bang na</option>
          <option value="sdsds">10022 - The Mall Bang kapi</option>
        </select>
      </div>
      <div class="cp-input-field _flex-row _cross-center">
        <label class="_no-margin">Available Location:</label>
        <select class="cp-input _flex-span" v-model="select3">
          <option value="" disabled>กรุณาเลือก...</option>
          <option value="sdsds">10020 - The Mall Ladprao</option>
          <option value="sdsds">10021 - The Mall Bang na</option>
          <option value="sdsds">10022 - The Mall Bang kapi</option>
        </select>
      </div>
    </div>

    <div class="map-info">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        style="border:0"
        src="https://www.google.com/maps/embed/v1/place?q=moon%20rhythm&key=AIzaSyBk69qho1TmnbOAEBvDlyMKKh5Dj223_wI" allowfullscreen>
      </iframe>
    </div>

    <div class="action-info cp-segment _flex-row _main-space-between">

      <div class="_flex-row" style="align-self: flex-start; margin-right: 8px;">
        <label class="cp-button -info _font-sub" for="image-input">อัพโหลดภาพ</label>
        <input id="image-input" class="_hide" name="Image" type="file" accept="image/*">
      </div>

      <div class="_flex-column" style="flex: 1">
        <div class="cp-input-field cp-block _flex-row _cross-center">
          <select class="cp-input" v-model="select4" style="box-sizing: border-box; width: 100%;">
            <option value="checkin">เช๊คอิน</option>
            <option value="report">ส่งรายงาน</option>
          </select>
        </div>
        <textarea style="box-sizing: border-box; width: 100%;" class="cp-input" name="" id="" rows="5" placeholder="รายละเอียด">

        </textarea>
      </div>

    </div>
    <div class="row cp-block-big">
      <div class="col-xs-12">
        <div class="cp-button -positive" @click="checkin">ส่งข้อมูล</div>
      </div>
    </div>
  </div>
</template>

<script>
import SweetAlert from 'sweetalert'
export default {
  name: 'IncentiveCheckin',
  data () {
    return {
      select1: '',
      select2: '',
      select3: '',
      select4: 'checkin'
    }
  },
  methods: {
    checkin () {
      SweetAlert('สำเร็จ!', 'คุณเช็คอินเรียบร้อยแล้ว', 'success')
    }
  }
}
</script>

<style scoped lang="scss">
.user-info {
  border-bottom: 1px solid #ececec;
}

.location-info {
  label {
    flex-basis: 100px;
  }
}

.map-info {
  height: 200px;
}
</style>
