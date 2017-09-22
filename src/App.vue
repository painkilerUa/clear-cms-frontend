<template>
  <div id="app">
    <!--<conf-popup />-->
    <!--<inform-msgs />-->
  	<!--<app-header />-->
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader'
import ConfPopup from '@/components/common/ConfPopup'
import InformMsgs from '@/components/common/InfomMsgs'

export default {
  name: 'app',
  components: {
    AppHeader,
    ConfPopup,
    InformMsgs
  }
}
</script>

<style src="@/assets/scss/app.scss" lang="scss" />
