<template>
	<!-- .admin-management -->
	<div class="admin-management">
		<h1>Admin Management</h1>
		<!-- admin-actions -->
		<ul class="admin-actions">
			<admin-management-item :itemInfo="action" v-for="action in actions" />
		</ul>
		<!-- END:admin-actions -->
      <v-select
      placeholder="Roles"
      :multiple="true"
      :on-change="selectRoles"
      :options="roles" />
	</div>
	<!-- END:.admin-management -->
</template>

<script>
import AdminManagementItem from '@/components/pages/AdminManagement/AdminManagementItem'

export default {
  name: 'admin-management',
  data () {
    return {
      actions: ['Action1', 'Action2', 'Action3'],
      roles: ['User', 'Admin', 'Editor']
    }
  },
  methods: {
    selectRoles () {
      console.log('selectRole')
    }
  },
  components: {
    AdminManagementItem
  }
}
</script>