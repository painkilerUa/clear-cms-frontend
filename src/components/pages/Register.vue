<template>
	<!-- .register -->
	<div class="register">
		<popup :title="'Create your account'" :modal="true">
		  <!-- popup-body -->
			<template slot="body">
			  <!-- .form -->
			  <form action="#" class="form" @submit.prevent="submit">
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input
			  		type="text"
			  		name="First Name"
			  		v-model="formInfo.username"
			  		data-vv-as='"First Name"'
			  		class="form-control"
			  		v-validate="'required'"
			  		placeholder="First Name" v-focus />
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
			  	<form-messages :messages="formServerMessages"/>
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
import forms from '@/mixins/forms'
import Popup from '@/components/common/Popup'
import FormMessages from '@/components/common/FormMessages'

export default {
  name: 'register',
  mixins: [forms],
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
      }
    }
  },
  methods: {
    sendFormRequest () {
      this.$http.post(api.URLS.register, JSON.stringify(this.formInfo))
      .then((res) => { this.submitSuccess(res.body) })
      .catch((err) => { this.submitErrors(err.body) })
    }
  },
  components: {
    Popup,
    FormMessages
  }
}
</script>