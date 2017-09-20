<template>
	<!-- .admin -->
	<div class="admin">
		<!-- .myContainer -->
		<div class="myContainer">
			<h1>{{getUsername}}</h1>
			<ul style="list-style:none">
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
          <router-link :to="{name: 'categories'}">Categories</router-link>
        </li>
				<br />
        <li>
          <router-link :to="{name: 'users'}">Users</router-link>
        </li>
        <br />
				<li>
					<router-link :to="{name: 'security-configuration'}">Security Configuration</router-link>
				</li>
			</ul>
			<router-view />
		</div>
		<!-- END:.myContainer -->
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
