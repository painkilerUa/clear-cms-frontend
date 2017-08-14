<template>
  <div class="error">
    <!-- error-wrapper -->
    <div class="error-wrapper">
      <h1>{{msg}}</h1>
      <router-link class="app-navlist__link" :to="{name: 'home'}">go Home</router-link>
    </div>
    <!-- END:error-wrapper -->
  </div>
</template>

<script>
export default {
  name: 'error',
  data () {
    return {
      msg: 'Sorry, The Page is not exists'
    }
  }
}
</script>

<style src="" lang="scss" scoped />
