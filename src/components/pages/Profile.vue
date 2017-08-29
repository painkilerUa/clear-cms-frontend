<template>
	<!-- .profile -->
	<div class="profile">
		<h1>{{getUsername}}</h1>
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