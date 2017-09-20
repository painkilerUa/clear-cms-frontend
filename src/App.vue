<template>
  <div id="app">
    <!--<conf-popup />-->
  	<app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader'
import ConfPopup from '@/components/common/ConfPopup'

export default {
  name: 'app',
  components: {
    AppHeader,
    ConfPopup
  }
}
</script>

<style src="@/assets/scss/app.scss" lang="scss" />
