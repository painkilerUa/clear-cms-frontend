<template>
	<!-- .admin -->
	<div class="admin">
		<h1>Admin</h1>
		<ul>
			<li>
				<router-link :to="{name: 'security-configuration'}">Security Configuration</router-link>
			</li>
		</ul>
	</div>
	<!-- END:.admin -->
</template>

<script>
export default {
  name: 'admin'
}
</script>