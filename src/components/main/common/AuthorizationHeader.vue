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
        <div class="front-header-capabilities">
          <!-- front-header-capabilities-sizes -->
          <ul class="front-header-capabilities-sizes">
            <li class="front-header-capabilities-sizes__item">
              <a href="#" class="front-header-capabilities-sizes__link small">A</a>
            </li>
            <li class="front-header-capabilities-sizes__item">
              <a href="#" class="front-header-capabilities-sizes__link medium">A</a>
            </li>
            <li class="front-header-capabilities-sizes__item">
              <a href="#" class="front-header-capabilities-sizes__link large">A</a>
            </li>
          </ul>
          <!-- END:front-header-capabilities-sizes -->

          <!-- .front-header-capabilities-colors -->
          <ul class="front-header-capabilities-colors">
            <li class="front-header-capabilities-colors__item">
              <a href="#" class="front-header-capabilities-colors__link">
                <img
                  src="../../../assets/img/main/header/capabilities-color-dyslexia.svg"
                  alt="capabilities-color"
                  class="front-header-capabilities-colors__icon" />
              </a>
            </li>
            <li class="front-header-capabilities-colors__item">
              <a href="#" class="front-header-capabilities-colors__link">
                <img
                  src="../../../assets/img/main/header/capabilities-color-normal.svg"
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
  computed: {
    ...mapGetters([
    ])
  },
  methods: {
    ...mapActions([
    ])
  },
  components: {
  }
}
</script>

<style src="@/assets/scss/main/common/authorization-header.scss" lang="scss" scoped/>
