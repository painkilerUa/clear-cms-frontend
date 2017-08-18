<template>
	<div class="login">
		<popup :title="'Login to your account'" :modal="true">
		  <!-- popup-body -->
			<template slot="body">
			  <!-- .form -->
			  <form action="#" class="form" @submit.prevent="login">
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="text" name="User Name" v-model="userName" data-vv-as='"User Name"' class="form-control" v-validate="'required'" placeholder="User Name" />
			  		<div v-if="errors.has('User Name')" class="form-errors">{{ errors.first('User Name') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="password" name="Password" v-model="userPassword" data-vv-as='"Password"' class="form-control" v-validate="'required'" placeholder="Password" />
			  		<div v-if="errors.has('Password')" class="form-errors">{{ errors.first('Password') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<button type="submit" class="form-control form-submit">Login</button>
			  </form>
			  <!-- END:.form -->
			</template>
		  <!-- END:popup-body -->
		  <!-- popup-footer -->
		  <template slot="footer">
		  	<!-- popup-infolinks -->
		  	<ul class="popup-infolinks">
		  		<li class="popup-infolinks__item">
		  			<router-link class="popup-infolinks__link" :to="{name: 'forgotPassword'}">Forgot password?</router-link>
		  		</li>
		  		<li class="popup-infolinks__item">
		  			<router-link class="popup-infolinks__link" :to="{name: 'register'}">Not registered yet?</router-link>
		  		</li>
		  	</ul>
		  	<!-- END:popup-infolinks -->
		  </template>
		  <!-- END:popup-footer -->
		</popup>
	</div>
</template>

<script>
import Popup from '@/components/common/Popup'

export default {
  name: 'login',
  data () {
    return {
      userName: null,
      userPassword: null,
      hasErrors: null
    }
  },
  methods: {
    checkErrorsOnSubmit () {
      this.$validator.validateAll()
      .then((res) => { res ? this.hasErrors = true : false })
    },
    login () {
      this.checkErrorsOnSubmit()
      this.hasErrors ? console.log('success') : false
    }
  },
  components: {
    Popup
  }
}
</script>