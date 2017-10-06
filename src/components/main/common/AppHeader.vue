<template>
  <header class="front-header">
    <!-- .front-header-top -->
    <div class="front-header-top">
      <!-- .myContainer -->
      <div class="myContainer front-header-top__inner">
        <a href="/" class="logo-link">
          <img
            width="222px"
            height="26px"
            class="logo-img"
            src="../../../assets/img/main/svg/main-logo.svg"
            alt="logo" />
        </a>
        <div class="front-header-text">
          helping talent shine through
        </div>
      </div>
      <!-- END:.myContainer -->
    </div>
    <!-- END:.front-header-top -->

    <!-- <div class="col-sm-8 tablet visible-sm">
      <span class="login">login</span> <span class="delimiter">|</span>
      <span class="icon-letter"><a href="#" class="small"> A </a><a href="#" class="middle"> A </a><a href="#" class="big"> A </a></span>
      <img src="../../../assets/img/main/header/theme1.png" alt="theme1">
      <img src="../../../assets/img/main/header/theme2.png" alt="theme2">
    </div> -->

    <div id="search" class="front-header-actions">
      <!-- .myContainer -->
      <div class="myContainer">
        <div class="front-header-actions__inner">
          <!-- front-header-login -->
          <div class="front-header-login">
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
                class="front-header-login-link"
                tabindex="-1">Login</router-link>
            </template>
          </div>
          <!-- wrap-autocomplete-input -->
          <div class="wrap-autocomplete-input">
              <autocomplete-input />
          </div>
          <!-- END:wrap-autocomplete-input -->
          <!-- END:front-header-login -->
          <div class="">
            <span class="icon-letter"><a href="#" class="small"> A </a><a href="#" class="middle"> A </a><a href="#" class="big"> A </a></span>
            <img src="../../../assets/img/main/header/theme1.png" alt="theme1">
            <img src="../../../assets/img/main/header/theme2.png" alt="theme2">
          </div>
        </div>
      </div>
      <!-- END:.myContainer -->
    </div>
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
