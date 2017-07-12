<template>
  <div class="login">
    <div class="user-panel cp-segment cp-block-big _flex-column _cross-center _bg-color-accent">

      <!--<img
        src="~@/assets/avatar.png" alt="avatar"
        class="cp-circle -big cp-block _bg-color-light _img-cover"
        width="100%" height="100%">-->

      <div class="cp-block-big _font-sub _font-size-bigger _font-thin">
        สวัสดี, <strong>คุณ{{ name }}</strong>
      </div>

      <div class="row _full-width">
        <div class="col-xs-6">
          <a href="#/profile">
            <div class="cp-button -positive">
              แก้ไขข้อมูล
            </div>
          </a>
        </div>
        <div class="col-xs-6">
          <a href="#/login">
            <div class="cp-button -positive">
              ออกจากระบบ
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="grid-container">
      <div class="_flex-column _full-width">
        <div class="row">

          <div class="col-xs-12 col-md-6 col-md-offset-3">
            <div class="_flex-column">

              <!--<div class="cp-header _font-sub _color-sub _align-center">
                เมนู
              </div>-->

              <!--<div class="_flex-row _main-center">
                <router-link to="/order/round" class="_full-width">
                  <div class="cp-button -primary _font-bold cp-block">
                    ออร์เดอร์สินค้า
                  </div>
                </router-link>
              </div>-->

              <div class="_flex-row _main-center cp-block">
                <router-link to="/incentive/checkin" class="_full-width">
                  <div class="cp-button -primary cp-block">
                    Incentive
                  </div>
                </router-link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      name: 'ประเสริฐ'
    }
  },
  methods: {
    select () {
      this.$router.push('/incentive/checkin')
    }
  }
}
</script>

<style scoped lang="scss">
  .login {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background-color: white;
  }
  .user-panel {
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.03), 0 5px 15px rgba(0, 0, 0, 0.06);
    color: white;
  }
  .logo {
    max-width: 200px;
  }
</style>
