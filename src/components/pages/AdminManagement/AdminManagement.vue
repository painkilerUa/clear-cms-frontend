<template>
	<!-- .admin-management -->
	<div class="admin-management">
		<h1>Admin Management</h1>
    <!-- .actions-table -->
    <div class="actions-table">
      <!-- .actions-heading -->
      <div class="actions-heading">
      	<div class="actions-cell actions-heading__cell">Actions:</div>
      	<div class="actions-cell actions-heading__cell" v-for="role in roles">
      		{{role}}
      	</div>
      </div>
      <!-- END:.actions-heading -->
      <!-- .actions-body -->
      <div class="actions-body">
      	<div class="actions-row" v-for="action in actions">
      		<div class="actions-cell">{{action}}</div>
      		<div class="actions-cell" v-for="role in roles">
      		  
      			<input type="checkbox" class="actions-checkbox" />
      		</div>
      	</div>
      </div>
      <!-- END:.actions-body -->
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
      roles: ['SuperAdmin', 'User', 'Admin', 'Editor']
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