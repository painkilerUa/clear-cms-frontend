<template>
  <header class="front-header">
    <!-- .container -->
    <div class="container">
      <!-- .front-header-top -->
      <div class="front-header-top">
        <a href="/" class="logo-link">
          <img
            width="222px"
            height="26px"
            class="logo-img"
            src="../../../assets/img/main/logo.png"
            alt="logo" />
        </a>
        <div class="front-header-text">
          helping talent shine through
        </div>
      </div>
      <!-- END:.front-header-top -->
    </div>
    <!-- END:.container -->
    <div class="col-sm-8 tablet visible-sm">
      <span class="login">login</span> <span class="delimiter">|</span>
      <span class="icon-letter"><a href="#" class="small"> A </a><a href="#" class="middle"> A </a><a href="#" class="big"> A </a></span>
      <img src="../../../assets/img/main/header/theme1.png" alt="theme1">
      <img src="../../../assets/img/main/header/theme2.png" alt="theme2">
    </div>
    <section id="search">
      <div class="container">
        <div class="row search">
          <div class="col-md-2 col-xs-4 mobile-block hidden-sm">
            <template v-if="getIsLoggedIn">
              <template v-if="getUserRole === 'Admin'">
                <router-link
                  :to="{name: 'admin'}"
                  class="front-header-login-link"
                  tabindex="-1"
                  v-if="getUsername">{{getUsername}}</router-link>
              </template>
              <template v-else>
                <router-link
                  :to="{name: 'profile'}"
                  class="front-header-login-link"
                  tabindex="-1"
                  v-if="getUsername">{{getUsername}}</router-link>
              </template>
              <a href="#" class="front-header-login-link" tabindex="-1" @click.prevent="authLogout">Logout</a>
            </template>
            <template v-else>
              <router-link
                :to="{name: 'login'}"
                class="app-header-login__item"
                tabindex="-1">Login</router-link>
            </template>
          </div>
          <div class="col-md-2 wrap_block col-md-push-8  col-xs-8 mobile-block hidden-sm">
            <span class="icon-letter"><a href="#" class="small"> A </a><a href="#" class="middle"> A </a><a href="#" class="big"> A </a></span>
            <img src="../../../assets/img/main/header/theme1.png" alt="theme1">
            <img src="../../../assets/img/main/header/theme2.png" alt="theme2">
          </div>
          <div class="col-md-8 col-md-pull-2  col-xs-12 add-padding col-sm-8 col-sm-offset-2 col-md-offset-0">
            <!--<form>-->
              <!--<input type="text" class="form-control" placeholder="Search">-->
            <!--</form>-->
            <div class="wrap-autocomplete-input">
              <autocomplete-input />
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'user-header',
  computed: {
    ...mapGetters([
      'getIsLoggedIn',
      'getUsername',
      'getUserRole'
    ])
  },
  methods: {
    ...mapActions([
      'authLogout'
    ])
  },
  components: {
  }
}
</script>

<style src="@/assets/scss/main/common/header.scss" lang="scss" scoped/>
<!--<style src="@/assets/scss/components/app-header.scss" lang="scss" scoped/>-->
