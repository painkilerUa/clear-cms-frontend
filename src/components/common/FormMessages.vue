<template>
  <div class="form-server-messages text-center">
		<!-- success -->
		<ul class="form-server-messages-list" v-if="messages.success.length">
			<li v-for="message in messages.success" class="form-success-messages">{{message}}</li>
		</ul>
		<!-- END:success -->
		<!-- errors -->
		<ul class="form-server-messages-list" v-if="messages.errors.length">
			<li v-for="error in messages.errors" class="form-errors">{{error}}</li>
		</ul>
		<!-- END:errors -->
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Object,
      default: {
        success: [],
        errors: []
      }
    }
  }
}
</script>