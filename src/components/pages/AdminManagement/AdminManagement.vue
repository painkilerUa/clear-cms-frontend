<template>
	<!-- .admin-management -->
	<div class="admin-management">
		<h1>Admin Management</h1>
    <!-- .actions-table -->
    <div class="actions-table">
      <!-- .actions-heading -->
      <div class="actions-heading">
      	<div class="actions-cell actions-heading__cell">Actions:</div>
      	<div class="actions-cell actions-heading__cell" v-for="role in roles">{{role}}</div>
      </div>
      <!-- END:.actions-heading -->
      <!-- .actions-body -->
      <div class="actions-body">
      	<div class="actions-row" v-for="action in actions">
      		<div class="actions-cell">{{action}}</div>
      		<div class="actions-cell" v-for="role in roles">
      			<label>
      				<input type="checkbox" class="actions-checkbox" @change="select" />
      				Enable
      			</label>
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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'admin-management',
  data () {
    return {
      selectedAction: null,
      selectedRole: null
    }
  },
  computed: {
    ...mapGetters([
      'actions',
      'roles'
    ])
  },
  methods: {
    ...mapActions([
      'getActions',
      'getRoles'
    ]),
    select () {
      console.log('selectRole')
    }
  },
  mounted () {
    this.getActions()
    this.getRoles()
  }
}
</script>

<style src="@/assets/scss/components/admin-management.scss" lang="scss" scoped />