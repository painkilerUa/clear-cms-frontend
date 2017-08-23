<template>
	<!-- .reset -->
	<div class="reset">
		<form
		name="fos_user_resetting_form"
		method="post"
		action="/resetting/reset/s02EaB9ePpwFW_NdLl9X5TW8d-cIIb-W2qVVwcQqM2s"
		class="form fos_user_resetting_reset">
		    <!-- form-element -->
        <div class="form-element">
            <input
            type="password"
            placeholder="New Password"
            name="fos_user_resetting_form[plainPassword][first]"
            required>
        </div>
		    <!-- END:form-element -->
		    <!-- form-element -->
        <div class="form-element">
            <input
            type="password"
            placeholder="Repeat new password"
            name="fos_user_resetting_form[plainPassword][second]"
            required>
        </div>
        <!-- END:form-element -->
    		<button type="submit">Change password</button>
		</form>
	</div>
	<!-- END:.reset -->
</template>

<script>
export default {
  name: 'reset'
}
</script>