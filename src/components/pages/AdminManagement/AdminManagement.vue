<template>
	<!-- .admin-management -->
	<div class='admin-management'>
		<h1>Admin Management</h1>
    <!-- .actions-table -->
    <div class='actions-table'>
      <!-- .actions-heading -->
      <div class='actions-heading'>
      	<div class='actions-cell actions-heading__cell'>Actions:</div>
      	<div class='actions-cell actions-heading__cell' v-for='role in roles'>{{role.name}}</div>
      </div>
      <!-- END:.actions-heading -->
      <!-- .actions-body -->
      <div class='actions-body'>
      	<div class='actions-row' v-for='action in actions'>
      		<div class='actions-cell'>{{action.actionName}}</div>
      		<div class='actions-cell' v-for='role in roles'>
      			<label>
      				<input type='checkbox' class='actions-checkbox' @change='select(action.actionId, role.id)' />
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
import api from '@/api'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'admin-management',
  data () {
    return {
      selectedInfo: {
        selectedAction: null,
        selectedRole: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'actions',
      'roles'
    ]),
    selectedInfoJson () {
      return JSON.stringify(this.selectedInfo)
    }
  },
  methods: {
    ...mapActions([
      'getActions',
      'getRoles'
    ]),
    sendRequest () {
      this.$http.post(api.URLS.actionsURLS.disallowed, this.selectedInfoJson)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    },
    select (action, role) {
      this.selectedInfo.selectedAction = action
      this.selectedInfo.selectedRole = role
      this.sendRequest()
    }
  },
  mounted () {
    this.getActions()
    this.getRoles()
  }
}
</script>

<style src='@/assets/scss/components/admin-management.scss' lang='scss' scoped />