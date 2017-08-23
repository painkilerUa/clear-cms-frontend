<template>
	<!-- .admin-management -->
	<div class='admin-management'>
		<h1>Admin Management</h1>
		<!-- <pre>{{allowedItems}}</pre> -->
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
      				<input type='checkbox' class='actions-checkbox' :checked="checkId(action.actionId, role.id)" @change='select(action.actionId, action.actionName, role.id)' />
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
      allowedItems: [],
      selectedInfo: {
        disallowed: {
          actionId: null,
          actionName: null,
          roleUser: null
        }
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
    checkId (actionId, roleId) {
      return this.allowedItems
      .filter(item => item.actionId === actionId)
      .filter(item => item.roleUser.id === roleId).length
    },
    sendRequest () {
      this.$http.post(api.URLS.actionsURLS.disallowed, this.selectedInfoJson)
      .then((res) => {})
      .catch((err) => console.log(err))
    },
    select (actionId, actionName, role) {
      this.selectedInfo.disallowed.actionId = actionId
      this.selectedInfo.disallowed.actionName = actionName
      this.selectedInfo.disallowed.roleUser = role
      this.sendRequest()
    }
  },
  mounted () {
    this.getActions()
    this.getRoles()
    this.$http.get(`${api.serverURL}${api.URLS.actionsURLS.permissions}`)
    .then((res) => {
      this.allowedItems = res.body
      console.log('getPermissions', res.body)
    })
  }
}
</script>

<style src='@/assets/scss/components/admin-management.scss' lang='scss' scoped />