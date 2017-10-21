<template>
  <header class="front-header" :style="{backgroundColor: bgColorSpOp, color: color}">
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
            alt="logo" v-if="+selectedHightCont !== 1"/>
          <img
            width="222px"
            height="26px"
            class="logo-img"
            src="../../../assets/img/main/contrast/main-logo.svg"
            alt="logo"  v-if="+selectedHightCont === 1"/>
        </a>
        <div class="front-header-tagline">
          <img
            width="200px"
            height="16px"
            src="../../../assets/img/main/svg/tagline.svg"
            alt="tagline" v-if="+selectedHightCont !== 1"/>
          <img
            width="200px"
            height="16px"
            src="../../../assets/img/main/contrast/tagline.svg"
            alt="tagline" v-if="+selectedHightCont === 1"/>
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
          <!-- END:front-header-login -->

          <!-- wrap-autocomplete-input -->
          <div class="wrap-autocomplete-input">
              <autocomplete-input />
          </div>
          <!-- END:wrap-autocomplete-input -->

          <!-- front-header-capabilities -->
          <div class="front-header-capabilities">
            <!-- front-header-capabilities-sizes -->
            <ul class="front-header-capabilities-sizes">
              <li class="front-header-capabilities-sizes__item">
                <a href="#" class="front-header-capabilities-sizes__link small" @click.prevent="resizeText(0)">A</a>
              </li>
              <li class="front-header-capabilities-sizes__item">
                <a href="#" class="front-header-capabilities-sizes__link medium" @click.prevent="resizeText(1)">A</a>
              </li>
              <li class="front-header-capabilities-sizes__item">
                <a href="#" class="front-header-capabilities-sizes__link large"@click.prevent="resizeText(2)">A</a>
              </li>
            </ul>
            <!-- END:front-header-capabilities-sizes -->

            <!-- .front-header-capabilities-colors -->
            <ul class="front-header-capabilities-colors">
              <li class="front-header-capabilities-colors__item">
                <a href="#" class="front-header-capabilities-colors__link" @click.prevent="changeVisibilityThem(0)">
                  <img
                    src="../../../assets/img/main/header/capabilities-color-normal.svg"
                    alt="capabilities-color"
                    class="front-header-capabilities-colors__icon" />
                </a>
              </li>
              <li class="front-header-capabilities-colors__item">
                <a href="#" class="front-header-capabilities-colors__link" @click.prevent="changeVisibilityThem(1)">
                  <img
                    src="../../../assets/img/main/header/capabilities-2high-contrast.svg"
                    alt="capabilities-color"
                    class="front-header-capabilities-colors__icon" />
                </a>
              </li>
              <li class="front-header-capabilities-colors__item">
                <a href="#" class="front-header-capabilities-colors__link" @click.prevent="changeVisibilityThem(2)">
                  <img
                    src="../../../assets/img/main/header/capabilities-color-dyslexia.svg"
                    alt="capabilities-color"
                    class="front-header-capabilities-colors__icon" />
                </a>
              </li>
            </ul>
            <!-- END:.front-header-capabilities-colors -->
          </div>
          <!-- END:front-header-capabilities -->
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
      'getUserRole',
      'bgColorSpOp',
      'color',
      'selectedHightCont'
    ])
  },
  methods: {
    ...mapActions([
      'authLogout',
      'resizeText',
      'changeVisibilityThem'
    ])
  },
  components: {
  }
}
</script>

<style src="@/assets/scss/main/common/header.scss" lang="scss" scoped/>
<!--<style src="@/assets/scss/components/app-header.scss" lang="scss" scoped/>-->
