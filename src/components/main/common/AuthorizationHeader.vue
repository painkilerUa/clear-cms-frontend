<template>
  <header class="front-header" :style="{backgroundColor: bgColorSpOp, color: color, height: isShownCookiesNot ? '122px' : '62px'}">
    <div class="front-header-cookies" v-if="isShownCookiesNot">
      <div class="myContainer flex-space-between-center">
        <div class="front-header-cookies-content" :style="whiteYelWhite">
          This website uses cookies, so we can improve your experience here/ By continuing to browse the site, you are agreeing to our use of cookies. Read more about this in our
          <router-link to="/cookies" :style="BlueYelBlue">Cookies Policy</router-link>
        </div>
        <div class="front-header-cookies-control">
          <button type="button" :style="confButtonStyle" @click="setCookiesPermission">I agree</button>
        </div>
      </div>
    </div>
    <!-- .front-header-top -->
    <div class="front-header-top">
      <!-- .myContainer -->
      <div class="myContainer front-header-top__inner">
        <a href="/" class="logo-link">
          <img
            v-if="+selectedHightCont !== 1"
            width="222px"
            height="26px"
            class="logo-img"
            src="../../../assets/img/main/svg/main-logo.svg"
            alt="logo" />
          <img
            width="222px"
            height="26px"
            class="logo-img"
            src="../../../assets/img/main/contrast/main-logo.svg"
            alt="logo"  v-if="+selectedHightCont === 1"/>
        </a>
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
              <a href="#" class="front-header-capabilities-sizes__link large" @click.prevent="resizeText(2)">A</a>
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
      </div>
      <!-- END:.myContainer -->
    </div>
    <!-- END:.front-header-top -->
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'authorization-header',
  data () {
    return {
      isShownCookiesNot: false
    }
  },
  computed: {
    ...mapGetters([
      'selectedHightCont',
      'bgColorSpOp',
      'color',
      'BlueYelBlue',
      'confButtonStyle',
      'whiteYelWhite'
    ]),
    confButtonStyle () {
      let color
      let backgroundColor
      switch (this.selectedHightCont) {
        case 0:
          color = '#fff'
          backgroundColor = '#257281'
          break
        case 1:
          color = '#000'
          backgroundColor = '#FFFA1A'
          break
        case 2:
          color = '#fff'
          backgroundColor = '#257281'
          break
      }
      return {
        color,
        backgroundColor
      }
    }
  },
  methods: {
    ...mapActions([
      'resizeText',
      'changeVisibilityThem'
    ]),
    setCookiesPermission () {
      this.setCookie('useCookies', true, {expires: new Date(2030, 0, 0)})
      this.isShownCookiesNot = false
    },
    setCookie (name, value, options) {
      options = options || {}

      var expires = options.expires

      if (typeof expires === 'number' && expires) {
        var d = new Date()
        d.setTime(d.getTime() + expires * 1000)
        expires = options.expires = d
      }
      if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString()
      }

      value = encodeURIComponent(value)

      var updatedCookie = name + '=' + value

      for (var propName in options) {
        updatedCookie += ';' + propName
        var propValue = options[propName]
        if (propValue !== true) {
          updatedCookie += '=' + propValue
        }
      }

      document.cookie = updatedCookie
    }
  },
  components: {
  },
  created () {
    this.isShownCookiesNot = !getCookie('useCookies')
    function getCookie (name) {
      let matches = document.cookie.match(new RegExp(
        '(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'
      ))
      return matches ? decodeURIComponent(matches[1]) : undefined
    }
  }
}
</script>

<style src="@/assets/scss/main/common/authorization-header.scss" lang="scss" scoped/>
