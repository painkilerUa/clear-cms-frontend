<template>
	<!-- .admin -->
	<div class="admin">
		<h1>{{getUsername}}</h1>
		<ul>
			<li>
				<router-link :to="{name: 'admin'}">Admin</router-link>
			</li>
			<br />
			<li>
				<router-link :to="{name: 'management'}">Management</router-link>
			</li>
			<br />
			<li>
				<router-link :to="{name: 'articles-list'}">Articles List</router-link>
			</li>
			<br />
			<li>
				<router-link :to="{name: 'security-configuration'}">Security Configuration</router-link>
			</li>
		</ul>
		<router-view />
	</div>
	<!-- END:.admin -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'admin',
  computed: {
    ...mapGetters([
      'getUsername'
    ])
  }
}
</script>