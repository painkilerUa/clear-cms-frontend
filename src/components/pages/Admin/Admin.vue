<template>
	<!-- .admin -->
	<div class="admin">
		<h1>Admin</h1>
		<ul>
			<li>
				<router-link :to="{name: 'admin'}">Admin</router-link>
			</li>
			<li>
				<router-link :to="{name: 'management'}">Management</router-link>
			</li>
			<li>
				<router-link :to="{name: 'security-configuration'}">Security Configuration</router-link>
			</li>
		</ul>
		<router-view />
	</div>
	<!-- END:.admin -->
</template>

<script>
export default {
  name: 'admin'
}
</script>