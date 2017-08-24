<template>
	<!-- .reset -->
	<div class="reset">
		<h1>Reset Password</h1>
		<form
		name="fos_user_resetting_form"
		method="post"
		:action="formAction"
		class="form">
		    <!-- form-element -->
        <div class="form-element">
            <input
            type="password"
            :name="passwordsNames.first"
            v-model="formInfo.fos_user_resetting_form.plainPassword.first"
            v-validate="'required'"
            data-vv-as='"Password"'
            placeholder="New Password"
            class="form-control"
            required>
            <div 
            v-if="errors.has('fos_user_resetting_form[plainPassword][first]')"
            class="form-errors">{{ errors.first('fos_user_resetting_form[plainPassword][first]') }}</div>
        </div>
		    <!-- END:form-element -->
		    <!-- form-element -->
        <div class="form-element">
            <input
            type="password"
            :name="passwordsNames.second"
            v-model="formInfo.fos_user_resetting_form.plainPassword.second"
            data-vv-as='"Repeat Password"'
            v-validate="'required|confirmed:fos_user_resetting_form[plainPassword][first]'"
            placeholder="Repeat new password"
            class="form-control"
            required>
            <div 
            v-if="errors.has('fos_user_resetting_form[plainPassword][second]')"
            class="form-errors">{{ errors.first('fos_user_resetting_form[plainPassword][second]') }}</div>
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
import api from '@/api'
import forms from '@/mixins/forms'
import FormMessages from '@/components/common/FormMessages'

export default {
  name: 'reset',
  props: ['token'],
  mixins: [forms],
  data () {
    return {
      passwordsNames: {
        first: 'fos_user_resetting_form[plainPassword][first]',
        second: 'fos_user_resetting_form[plainPassword][second]'
      },
      formInfo: {
        fos_user_resetting_form: {
          plainPassword: {
            first: '',
            second: ''
          }
        }
      }
    }
  },
  computed: {
    formAction () {
      return api.serverURL + window.location.pathname
    }
  },
  components: {
    FormMessages
  }
}
</script>