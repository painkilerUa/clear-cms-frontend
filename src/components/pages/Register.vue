<template>
	<!-- .register -->
	<div class="register">
		<popup :title="'Create your account'" :modal="true">
		  <!-- popup-body -->
			<template slot="body">
			  <!-- .form -->
			  <form action="#" class="form" @submit.prevent="register">
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input
			  		type="text"
			  		name="First Name"
			  		v-model="formInfo.username"
			  		data-vv-as='"First Name"'
			  		class="form-control"
			  		v-validate="'required'"
			  		placeholder="First Name" />
			  		<div v-if="errors.has('First Name')" class="form-errors">{{ errors.first('First Name') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input 
			  		type="text"
			  		name="Last Name"
			  		data-vv-as='"Last Name"'
			  		class="form-control"
			  		v-model="formInfo.lastName"
			  		v-validate="'required'"
			  		placeholder="Last Name" />
			  		<div v-if="errors.has('Last Name')" class="form-errors">{{ errors.first('Last Name') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input
			  		type="email"
			  		name="Email Address"
			  		data-vv-as='"Email Address"'
			  		class="form-control"
			  		v-model="formInfo.email"
			  		v-validate="'required|email'"
			  		placeholder="Email Address" />
			  		<div v-if="errors.has('Email Address')" class="form-errors">{{ errors.first('Email Address') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input
			  		type="password"
			  		name="PasswordFirst"
			  		data-vv-as='"PasswordFirst"'
			  		class="form-control"
			  		v-model="formInfo.plainPassword.first"
			  		v-validate="'required'"
			  		placeholder="Password" />
			  		<div v-if="errors.has('PasswordFirst')" class="form-errors">{{ errors.first('PasswordFirst') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input
			  		type="password"
			  		name="PasswordSecond"
			  		data-vv-as='"PasswordSecond"'
			  		class="form-control"
			  		v-model="formInfo.plainPassword.second"
			  		v-validate="'required|confirmed:PasswordFirst'"
			  		placeholder="Confirm Password" />
			  		<div v-if="errors.has('PasswordSecond')" class="form-errors">{{ errors.first('PasswordSecond') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<v-select
			  		placeholder="Function"
			  		name="Function"
			  		data-vv-name="Function"
			  		v-model="formInfo.function"
			  		v-validate="'required'"
			  		data-vv-as='"Function"'
			  		class="form-control form-control--select"
			  		:options="functionOptions" />
			  		<div v-if="errors.has('Function')" class="form-errors">{{ errors.first('Function') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input
			  		type="text"
			  		name="Job Title"
			  		data-vv-as='"Job Title"'
			  		class="form-control"
			  		v-model="formInfo.jobTitle"
			  		v-validate="'required'"
			  		placeholder="Job Title" />
			  		<div v-if="errors.has('Job Title')" class="form-errors">{{ errors.first('Job Title') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<button type="submit" class="form-control form-submit">Create account</button>
			  	<!-- .form-server-messages -->
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
			  	<!-- END:.form-server-messages -->
			  </form>
			  <!-- END:.form -->
			</template>
		  <!-- END:popup-body -->
		  <!-- popup-footer -->
		  <template slot="footer">
		  	<!-- popup-infolinks -->
		  	<ul class="popup-infolinks">
		  		<li class="popup-infolinks__item">
		  			Already have an account?
		  			<router-link :to="{name: 'login'}">Login</router-link>
		  		</li>
		  	</ul>
		  	<!-- END:popup-infolinks -->
		  </template>
		  <!-- END:popup-footer -->
		</popup>
	</div>
	<!-- END:.register -->
</template>

<script>
import api from '@/api'
import Popup from '@/components/common/Popup'

export default {
  name: 'register',
  data () {
    return {
      functionOptions: ['One', 'Two'],
      formInfo: {
        username: '',
        email: '',
        plainPassword: {
          first: '',
          second: ''
        },
        function: '',
        lastName: '',
        jobTitle: ''
      },
      formErrors: this.$validator.errors.items,
      formServerMessages: {
        success: [],
        errors: []
      }
    }
  },
  computed: {
    serverSuccessMessages () {
      return this.formServerMessages.success
    },
    serverErrors () {
      return this.formServerMessages.errors
    }
  },
  methods: {
    clearServerErrors () {
      this.formServerMessages.errors = []
    },
    checkErrorsOnSubmit () {
      this.$validator.validateAll()
    },
    registerSuccess (res) {
      this.clearServerErrors()
      this.formServerMessages.success = res
    },
    registerErrors (err) {
      this.formServerMessages.errors = err
    },
    sendRegisterRequest () {
      this.$http.post(`${api.serverURL}/api/v1/register`, JSON.stringify(this.formInfo))
      .then((res) => { this.registerSuccess(res.body) })
      .catch((err) => { this.registerErrors(err.body) })
    },
    register () {
      this.checkErrorsOnSubmit()
      if (this.formErrors.length === 0) {
        this.sendRegisterRequest()
      }
    }
  },
  components: {
    Popup
  }
}
</script>