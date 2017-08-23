<template>
	<!-- .reset -->
	<div class="reset">
		<h1>Reset Password</h1>
		<form
		name="fos_user_resetting_form"
		method="post"
		action="/resetting/reset/s02EaB9ePpwFW_NdLl9X5TW8d-cIIb-W2qVVwcQqM2s"
		class="form fos_user_resetting_reset">
		    <!-- form-element -->
        <div class="form-element">
            <input
            type="password"
            name="passwordsNames.first"
            v-model="formInfo.plainPassword.first"
            v-validate="'required'"
            data-vv-as='"Password"'
            placeholder="New Password"
            class="form-control"
            required>
            <div 
            v-if="errors.has('passwordsNames.first')"
            class="form-errors">{{ errors.first('passwordsNames.first') }}</div>
        </div>
		    <!-- END:form-element -->
		    <!-- form-element -->
        <div class="form-element">
            <input
            type="password"
            name="passwordsNames.second"
            v-model="formInfo.plainPassword.second"
            data-vv-as='"Repeat Password"'
            v-validate="'required|confirmed:passwordsNames.first'"
            placeholder="Repeat new password"
            class="form-control"
            required>
            <div 
            v-if="errors.has('passwordsNames.second')"
            class="form-errors">{{ errors.first('passwordsNames.second') }}</div>
        </div>
        <!-- END:form-element -->
    		<button
    		type="submit"
    		class="form-control form-submit">
    		Change password</button>
		</form>
	</div>
	<!-- END:.reset -->
</template>

<script>
import forms from '@/mixins/forms'
import FormMessages from '@/components/common/FormMessages'

export default {
  name: 'reset',
  mixins: [forms],
  data () {
    return {
      passwordsNames: {
        first: 'fos_user_resetting_form[plainPassword][first]',
        second: 'fos_user_resetting_form[plainPassword][second]'
      },
      formInfo: {
        plainPassword: {
          first: '',
          second: ''
        }
      }
    }
  },
  components: {
    FormMessages
  }
}
</script>