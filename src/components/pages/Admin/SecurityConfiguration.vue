<template>
	<!-- .security-configuration -->
	<div class='security-configuration'>
		<h1>Security Configuration</h1>
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
      				<input
      				type='checkbox'
      				class='actions-checkbox'
      				:checked="checkIdLength(action.actionId, role.id)"
      				@change='select(action.actionId, action.actionName, role.id)' />
      				Enable
      			</label>
      		</div>
      	</div>
      </div>
      <!-- END:.actions-body -->
    </div>
    <!-- END:.actions-table -->
	</div>
	<!-- END:.security-configuration -->
</template>

<script>
import api from '@/api'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'security-configuration',
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
    checkIdLength (actionId, roleId) {
      return this.allowedItems
      .filter(item => item.actionId === actionId)
      .filter(item => item.roleUser.id === roleId).length
    },
    sendRequest () {
      this.$http.post(api.URLS.actionsURLS.disallowed, this.selectedInfoJson, api.headersAuthSettings)
      .then((res) => console.log(res))
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
    this.$http.get(`${api.serverURL}${api.URLS.actionsURLS.permissions}`, api.headersAuthSettings)
    .then((res) => {
      this.allowedItems = res.body
    })
  }
}
</script>

<style src='@/assets/scss/components/security-configuration.scss' lang='scss' scoped />