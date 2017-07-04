<template>
  <div class="profile">

    <div class="user-panel cp-segment cp-block-big _flex-column _cross-center _bg-color-accent">
      <div class="_flex-row _main-start _full-width">
        <div
          @click="back"
          class="back _flex-row _cross-center _main-center _font-size-bigger">
          <i class="fa fa-angle-left _font-bold"></i>
        </div>
        <div class="_flex-row _cross-center" @click="back">
          <h4 class="_no-margin">&nbsp;&nbsp;ย้อนกลับ</h4>
        </div>
      </div>
    </div>

    <div class="form-panel grid-container">
      <div class="_flex-column _full-width">
        <div class="row">

          <div class="col-xs-12 col-md-6 col-md-offset-3">
            <div class="_flex-column">
              <div class="_flex-row _main-center">
                <!--<img
                src="~@/assets/avatar.png" alt="avatar"
                class="cp-circle -big cp-block _bg-color-light _img-cover"
                width="100%" height="100%">-->
              </div>
              <div class="cp-input-field _flex-column">
                <label>ชื่อร้าน:</label>
                <input v-model="storeName" class="cp-input" name="storeName" placeholder="ชื่อลูกค้า">
              </div>

              <div class="cp-input-field _flex-column">
                <label>ชื่อ:</label>
                <input v-model="firstName" class="cp-input" name="firstName" placeholder="ชื่อ">
              </div>

              <div class="cp-input-field _flex-column">
                <label>นามสกุล:</label>
                <input v-model="lastName" class="cp-input" name="lastName" placeholder="นามสกุล">
              </div>

              <div class="cp-input-field _flex-column">
                <label>โทรศัพท์:</label>
                <input v-model="phoneNumber" class="cp-input" name="phoneNumber" placeholder="โทรศัพท์">
              </div>

              <div class="cp-input-field _flex-column">
                <label>มือถือ:</label>
                <input v-model="mobileNumber" class="cp-input" name="mobileNumber" placeholder="มือถือ">
              </div>

              <div class="cp-input-field _flex-column">
                <label>ที่อยู่:</label>
                <textarea v-model="address" class="cp-input" name="address" placeholder="ที่อยู่" rows="2"></textarea>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="save-button cp-button -positive">
      บันทึกการเปลี่ยนแปลง
    </div>


  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      storeName: 'บิ๊กซีราชดำริ',
      firstName: 'ประเสริฐ',
      lastName: 'แสวงหา',
      phoneNumber: '022345555',
      mobileNumber: '0878884455',
      address: '123/54 ซอยวงศ์สว่าง 39, เขตบางซื่อ กทม 10800'
    }
  },
  methods: {
    back () {
      this.$router.push('/menu')
    }
  }
}
</script>

<style scoped lang="scss">
  .profile {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: white;
  }
  .user-panel {
    position: fixed;
    left: 0;
    right: 0;
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.03), 0 5px 15px rgba(0, 0, 0, 0.06);
    color: white;
  }
  .save-button {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 0;
    box-shadow: 0 -15px 35px rgba(50, 50, 93, 0.03), 0 -5px 15px rgba(0, 0, 0, 0.06);
  }
  .form-panel {
    padding-top: 80px;
    padding-bottom: 50px;
  }
</style>
