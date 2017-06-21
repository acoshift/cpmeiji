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
                Sign In
              </div>
              <form @submit="login">
                <div class="cp-input-field _flex-column">
                  <label>Username:</label>
                  <input v-model="username" class="cp-input" name="Email" placeholder="Username">
                </div>

                <div class="cp-input-field _flex-column">
                  <label>Password:</label>
                  <input v-model="password" class="cp-input" name="Password" placeholder="Password">
                </div>

                <div class="_flex-row _main-center">
                  <button
                    @click="login"
                    class="cp-button -primary _font-sub cp-block _full-width"
                    type="submit">
                    Sign In
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      window.role = this.username === 'sale' ? 'sale' : ''
      this.$router.push('/menu')
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
