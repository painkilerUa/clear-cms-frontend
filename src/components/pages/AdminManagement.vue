<template>
	<!-- .admin-management -->
	<div class="admin-management">
		<h1>Admin Management</h1>
		<!-- admin-actions -->
		<ul class="admin-actions">
			<li v-for="action in actions">{{action}}</li>
		</ul>
		<!-- END:admin-actions -->
      <v-select
      placeholder="Topic"
      :multiple="true"
      :on-change="selectRoles"
      :options="actions" />
	</div>
	<!-- END:.admin-management -->
</template>

<script>
export default {
  name: 'admin-management',
  data () {
    return {
      actions: ['Action1', 'Action2', 'Action3']
    }
  },
  methods: {
    selectRoles () {
      console.log('selectRole')
    }
  }
}
</script>