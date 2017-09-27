<template>
  <div class="wrapper">
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
    ])
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<!--<style src="@/assets/scss/_bootstrap.css" scoped/>-->
