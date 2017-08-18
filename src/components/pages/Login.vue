<template>
	<div class="login">
		<popup :title="'Login to your account'" :modal="true">
		  <!-- popup-body -->
			<template slot="body">
			  <!-- .form -->
			  <form action="#" class="form" @submit.prevent="login">
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="text" name="User Name" v-model="formInfo.username" data-vv-as='"User Name"' class="form-control" v-validate="'required'" placeholder="User Name" />
			  		<div v-if="errors.has('User Name')" class="form-errors">{{ errors.first('User Name') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="password" name="PasswordFirst" v-model="formInfo.plainPassword.first" data-vv-as='"PasswordFirst"' class="form-control" v-validate="'required'" placeholder="Password" />
			  		<div v-if="errors.has('PasswordFirst')" class="form-errors">{{ errors.first('PasswordFirst') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="password" name="PasswordSecond" v-model="formInfo.plainPassword.second" data-vv-as='"PasswordSecond"' class="form-control" v-validate="'required|confirmed:PasswordFirst'" placeholder="Confirm Password" />
			  		<div v-if="errors.has('PasswordSecond')" class="form-errors">{{ errors.first('PasswordSecond') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<button type="submit" class="form-control form-submit">Login</button>
			  	<form-messages :messages="formServerMessages" />
			  </form>
			  <!-- END:.form -->
			</template>
		  <!-- END:popup-body -->
		  <!-- popup-footer -->
		  <template slot="footer">
		  	<!-- popup-infolinks -->
		  	<ul class="popup-infolinks">
		  		<!-- <li class="popup-infolinks__item">
		  			<router-link class="popup-infolinks__link" :to="{name: 'forgotPassword'}">Forgot password?</router-link>
		  		</li> -->
		  		<li class="popup-infolinks__item">
		  			<router-link class="popup-infolinks__link" :to="{name: 'Login'}">Not registered yet?</router-link>
		  		</li>
		  	</ul>
		  	<!-- END:popup-infolinks -->
		  </template>
		  <!-- END:popup-footer -->
		</popup>
	</div>
</template>

<script>
import api from '@/api'
import Popup from '@/components/common/Popup'
import FormMessages from '@/components/common/FormMessages'

export default {
  name: 'login',
  data () {
    return {
      formInfo: {
        username: null,
        plainPassword: {
          first: '',
          second: ''
        }
      },
      formErrors: this.$validator.errors.items,
      formServerMessages: {
        success: [],
        errors: []
      }
    }
  },
  methods: {
    clearServerErrors () {
      this.formServerMessages.errors = []
    },
    checkErrorsOnSubmit () {
      this.$validator.validateAll()
    },
    loginSuccess (res) {
      this.clearServerErrors()
      this.formServerMessages.success = res
    },
    loginErrors (err) {
      this.formServerMessages.errors = err
    },
    sendLoginRequest () {
      let query = `username=${this.username}&password=${this.formInfo.plainPassword.first}`
      this.$http.post(`${api.URLS.login}${query}`, JSON.stringify(this.formInfo))
      .then((res) => { this.loginSuccess(res.body) })
      .catch((err) => { this.loginErrors(err.body) })
    },
    login () {
      this.checkErrorsOnSubmit()
      if (this.formErrors.length === 0) {
        this.sendLoginRequest()
      }
    }
  },
  components: {
    Popup,
    FormMessages
  }
}
</script>