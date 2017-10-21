<template>
  <div id="app" class="app login">
    <div class="wrapper">
      <Authorization-header />
      <main class="main">
        <div class="center">
          <div class="main-title-404">404</div>
          <div class="main-404-label">
            <p>The page you are looking for doesn't exist. <br />
              &larrhk; <a href="/">Go back to the homepage</a> and try using the search to locate what you're looking for.</p>
          </div>
        </div>
      </main>
      <div class="push"></div>
    </div>
  </div>
</template>

<script>
import AuthorizationHeader from '@/components/main/common/AuthorizationHeader'

export default {
  name: 'error',
  data () {
    return {
      msg: 'Sorry, The Page is not exists'
    }
  },
  components: {
    AuthorizationHeader
  }
}
</script>

<style src="@/assets/scss/main/loginForAllPage.scss" lang="scss" scoped></style>
