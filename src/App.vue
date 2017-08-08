<template>
  <div id="app">
  	<app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style src="@/assets/scss/app.scss" lang="scss" />
