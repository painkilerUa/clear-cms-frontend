<template>
	<!-- .admin-management -->
	<div class="admin-management">
		<h1>Admin Management</h1>
    <!-- .actions-table -->
    <div class="actions-table">
      <!-- .actions-heading -->
      <div class="actions-heading">
      	<div class="actions-cell actions-heading__cell text-center" v-for="role in roles">
      		<label class="actions-cell__title">
      			{{role}}
      			<input type="checkbox" />
      		</label>
      	</div>
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