<template>
	<!-- .admin -->
	<div class="admin">
		<h1>Admin</h1>
		<ul>
			<li>
				<router-link to="/admin/security-configuration">Security Configuration</router-link>
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