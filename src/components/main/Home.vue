<template>
  <div class="wrapper" :style="{backgroundColor: bgColorSpOp}">
      <app-header />
      <router-view />
      <app-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from '@/components/main/common/AppHeader'
import AppFooter from '@/components/main/common/AppFooter'

export default {
  name: 'admin',
  computed: {
    ...mapGetters([
      'getSelectedFontSize',
      'bgColorSpOp'
    ])
  },
  components: {
    AppHeader,
    AppFooter
  },
  created () {
    document.getElementsByTagName('html')[0].style.fontSize = this.getSelectedFontSize
  },
  watch: {
    getSelectedFontSize () {
      document.getElementsByTagName('html')[0].style.fontSize = this.getSelectedFontSize
    }
  }
}
</script>

<!--<style src="@/assets/scss/_bootstrap.css" scoped/>-->
