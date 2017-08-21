<template>
	<!-- .admin-management -->
	<div class="admin-management">
		<h1>Admin Management</h1>
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