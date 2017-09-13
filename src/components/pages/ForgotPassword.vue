<template>
	<!-- .forgot-password -->
	<div class="forgot-password">
		<popup :title="title" :description="description" :modal="true">
		  <!-- popup-body -->
			<template slot="body">
			  <!-- .form -->
			  <form action="#" class="form" @submit.prevent="submit">
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input
			  		type="text"
			  		name="Email"
			  		v-model="formInfo.email"
			  		data-vv-as='"Email"'
			  		class="form-control"
			  		v-validate="'required|email'"
			  		placeholder="Email" />
			  		<div v-if="errors.has('Email')" class="form-errors">{{ errors.first('Email') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<button type="submit" class="form-control form-submit">Send Email</button>
			  	<form-messages :messages="formServerMessages"/>
			  </form>
			  <!-- END:.form -->
			</template>
		  <!-- END:popup-body -->
		  <!-- popup-footer -->
		  <template slot="footer">
		  	 <!--popup-infolinks-->
		  	<!--<ul class="popup-infolinks">-->
		  		<!--<li class="popup-infolinks__item">-->
		  			<!--<router-link class="popup-infolinks__link" :to="{name: 'register'}">Not registered yet?</router-link>-->
		  		<!--</li>-->
		  	<!--</ul>-->
		  	<!-- END:popup-infolinks -->
		  </template>
		  <!-- END:popup-footer -->
		</popup>
	</div>
	<!-- END:.forgot-password -->
</template>

<script>
import api from '@/api'
import forms from '@/mixins/forms'
import Popup from '@/components/common/Popup'
import FormMessages from '@/components/common/FormMessages'

export default {
  name: 'forgot-password',
  mixins: [forms],
  data () {
    return {
      resetToken: '',
      title: 'Forgot Password',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium sed necessitatibus enim recusandae sunt numquam, ducimus asperiores laborum! Reprehenderit!',
      formInfo: {
        email: ''
      }
    }
  },
  methods: {
    resetRedirect () {
      this.$router.push({name: 'reset', params: {token: this.resetToken}})
    },
    submitSuccess (res) {
      this.formServerMessages.success.push(res)
    },
    submitErrors (err) {
      this.formServerMessages.errors.push(err)
    },
    sendFormRequest () {
      this.$http.post(api.URLS.forgotPassword, JSON.stringify(this.formInfo))
      .then((res) => {
        console.log(res)
        this.submitSuccess(res.body)
      })
      .catch((err) => { this.submitErrors(err.body) })
    }
  },
  components: {
    Popup,
    FormMessages
  }
}
</script>
