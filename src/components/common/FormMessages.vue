<template>
  <div class="form-server-messages text-center">
		<!-- success -->
		<ul class="form-server-messages-list" v-if="serverSuccessMessages">
			<li v-for="message in serverSuccessMessages" class="form-success-messages">{{message}}</li>
		</ul>
		<!-- END:success -->
		<!-- errors -->
		<ul class="form-server-messages-list" v-if="serverErrors.length">
			<li v-for="error in serverErrors" class="form-errors">{{error}}</li>
		</ul>
		<!-- END:errors -->
  </div>
</template>

<script>
export default {
  props: {
    formServerMessages: {
      success: [],
      errors: []
    }
  }
}
</script>