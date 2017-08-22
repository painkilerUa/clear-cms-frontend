<template>
	<!-- .admin-management -->
	<div class="admin-management">
		<h1>Admin Management</h1>
    <!-- .actions-table -->
    <div class="actions-table">
      <!-- .actions-heading -->
      <div class="actions-heading">
      	<div class="actions-cell actions-heading__cell">
      		<span class="actions-cell__title">Admin</span>
      		<input type="checkbox" />
      	</div>
      	<div class="actions-cell actions-heading__cell">User</div>
      	<div class="actions-cell actions-heading__cell">Editor</div>
      </div>
      <!-- END:.actions-heading -->
    </div>
    <!-- END:.actions-table -->
	</div>
	<!-- END:.admin-management -->
</template>

<script>
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
  }
}
</script>

<style src="@/assets/scss/components/admin-management.scss" lang="scss" scoped />