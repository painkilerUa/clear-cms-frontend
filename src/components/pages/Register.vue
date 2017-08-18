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
			  		<input type="text" name="First Name" v-model="formInfo.username" data-vv-as='"First Name"' class="form-control" v-validate="'required'" placeholder="First Name" />
			  		<div v-if="errors.has('First Name')" class="form-errors">{{ errors.first('First Name') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="text" name="Last Name" data-vv-as='"Last Name"' class="form-control" v-validate="'required'" placeholder="Last Name" />
			  		<div v-if="errors.has('Last Name')" class="form-errors">{{ errors.first('Last Name') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="email" name="Email Address" data-vv-as='"Email Address"' class="form-control" v-validate="'required|email'" placeholder="Email Address" />
			  		<div v-if="errors.has('Email Address')" class="form-errors">{{ errors.first('Email Address') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="password" name="Password" data-vv-as='"Password"' class="form-control" v-validate="'required'" placeholder="Password" />
			  		<div v-if="errors.has('Password')" class="form-errors">{{ errors.first('Password') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<v-select placeholder="Function" name="Function" data-vv-as='"Function"' v-validate="'required'" class="form-control form-control--select" :options="['One', 'Two']" />
			  		<div v-if="errors.has('Function')" class="form-errors">{{ errors.first('Function') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="text" name="Job Title" data-vv-as='"Job Title"' class="form-control" v-validate="'required'" placeholder="Job Title" />
			  		<div v-if="errors.has('Job Title')" class="form-errors">{{ errors.first('Job Title') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<button type="submit" class="form-control form-submit">Create account</button>
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
import Popup from '@/components/common/Popup'

export default {
  name: 'register',
  data () {
    return {
      formInfo: {
        username: '',
        email: '',
        plainPassword: {
          first: '',
          second: ''
        },
        function: '',
        lastName: '',
        jobtitle: '',
        enabled: null
      }
    }
  },
  methods: {
    register () {
      console.log('register')
    }
  },
  components: {
    Popup
  }
}
</script>