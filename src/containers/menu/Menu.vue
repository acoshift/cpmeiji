<template>
  <div class="login _bg-color-accent">
    <div class="grid-container">
      <div class="_flex-column _full-width">
        <div class="row">

          <div class="col-xs-12 _align-center cp-block-bigger">
            <img class="logo" src="~@/assets/meiji.png" width="100%">
          </div>

          <div class="col-xs-12 col-md-6 col-md-offset-3">
            <div class="cp-card cp-segment _flex-column">

              <div class="cp-header _font-sub _color-sub _align-center">
                Select Menu
              </div>

              <div class="_flex-row _main-center">
                <router-link to="/order/location" class="_full-width">
                  <div class="cp-button -primary _font-sub cp-block">
                    Order
                  </div>
                </router-link>
              </div>

              <div class="_flex-row _main-center cp-block">
                <router-link to="/incentive/checkin" class="_full-width">
                  <div class="cp-button -primary _font-sub cp-block">
                    Incentive
                  </div>
                </router-link>
              </div>

              <a href="#/login" class="_full-width _align-center _color-sub">
                Logout
              </a>

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
  methods: {
    select () {
      this.$router.push('/incentive/checkin')
    }
  }
}
</script>

<style scoped lang="scss">
  .login {
    padding-top: 48px;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
  }
  .logo {
    max-width: 200px;
  }
</style>
