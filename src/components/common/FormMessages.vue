<template>
  <div class="form-server-messages text-center">
		<!-- success -->
		<ul class="form-server-messages-list" v-if="formServerMessages.success.length">
			<li v-for="message in formServerMessages.success" class="form-success-messages">{{message}}</li>
		</ul>
		<!-- END:success -->
		<!-- errors -->
		<ul class="form-server-messages-list" v-if="formServerMessages.errors.length">
			<li v-for="error in formServerMessages.errors" class="form-errors">{{error}}</li>
		</ul>
		<!-- END:errors -->
  </div>
</template>

<script>
export default {
  props: {
    formServerMessages: {
      type: Object,
      default: {
        success: [],
        errors: []
      }
    }
  }
}
</script>