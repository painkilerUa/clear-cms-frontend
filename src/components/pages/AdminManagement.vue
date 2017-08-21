<template>
	<!-- .admin-management -->
	<div class="admin-management">
		<h1>Admin Management</h1>
		<!-- admin-actions -->
		<ul class="admin-actions">
			<li class="admin-actions__item">Action1</li>
			<li class="admin-actions__item">Action2</li>
			<li class="admin-actions__item">Action3</li>
		</ul>
		<!-- END:admin-actions -->
      <v-select
      placeholder="Topic"
      value.sync="selectedTags"
      :multiple="true"
      :on-change="selectTags"
      :options="getTagTitles" />
	</div>
	<!-- END:.admin-management -->
</template>

<script>
export default {
  name: 'admin-management'
}
</script>