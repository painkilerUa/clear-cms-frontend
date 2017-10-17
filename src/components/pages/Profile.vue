<template>
	<!-- .profile -->
	<div class="profile">
		<h1>Some content will be here</h1>
	</div>
	<!-- END:.profile -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'profile',
  computed: {
    ...mapGetters([
      'getUsername'
    ])
  }
}
</script>

<style src='@/assets/scss/components/profile.scss' lang='scss' scoped />
