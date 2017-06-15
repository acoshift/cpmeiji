<template>
  <div class="checkin">

    <div class="user-info cp-segment _flex-row _main-space-between">
      <div>นายบุญช่วย วิเศษนคร</div>
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

      <div class="_flex-row _flex-span" style="align-self: flex-start">
        <label class="cp-button -info _font-sub" for="image-input">Upload Image</label>
        <input id="image-input" class="_hide" name="Image" type="file" accept="image/*">
      </div>

      <div class="_flex-column _flex-span">
        <div class="cp-input-field cp-block _flex-row _cross-center">
          <select class="cp-input _flex-span" v-model="select4">
            <option value="checkin">เช๊คอิน</option>
            <option value="report">ส่งรายงาน</option>
          </select>
        </div>
        <textarea class="cp-input" name="" id="" rows="5"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
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
  methods: {}
}
</script>

<style scoped lang="scss">
.checkin {

}

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
