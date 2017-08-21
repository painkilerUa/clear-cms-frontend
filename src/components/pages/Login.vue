<template>
	<div class="login">
		<popup :title="title" :description="description" :modal="true">
		  <!-- popup-body -->
			<template slot="body">
			  <!-- .form -->
			  <form action="#" class="form" @submit.prevent="submit">
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="text" name="User Name" v-model="formInfo.username" data-vv-as='"User Name"' class="form-control" v-validate="'required'" placeholder="User Name" />
			  		<div v-if="errors.has('User Name')" class="form-errors">{{ errors.first('User Name') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="password" name="PasswordFirst" v-model="formInfo.password" data-vv-as='"PasswordFirst"' class="form-control" v-validate="'required'" placeholder="Password" />
			  		<div v-if="errors.has('PasswordFirst')" class="form-errors">{{ errors.first('PasswordFirst') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="password" name="PasswordSecond" v-model="secondPassword" data-vv-as='"PasswordSecond"' class="form-control" v-validate="'required|confirmed:PasswordFirst'" placeholder="Confirm Password" />
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
		  		<li class="popup-infolinks__item">
		  			<router-link class="popup-infolinks__link" :to="{name: 'forgot-password'}">Forgot password?</router-link>
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
import api from '@/api'
import forms from '@/mixins/forms'
import Popup from '@/components/common/Popup'
import FormMessages from '@/components/common/FormMessages'

export default {
  name: 'login',
  mixins: [forms],
  data () {
    return {
      title: 'Login to your account',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium sed necessitatibus enim recusandae sunt numquam, ducimus asperiores laborum! Reprehenderit!',
      formInfo: {
        username: null,
        password: null,
        grant_type: 'password',
        client_id: '1_hfxueyakuh44w8osgg8wkkgcskgw8s08gcwk448cwwkg8oc4w',
        client_secret: '69cem3f7d808s00oswgsco4k4w4cco8os08c0co4844skw8ko0'
      },
      secondPassword: null
    }
  },
  methods: {
    sendFormRequest () {
      this.$http.post(`${api.URLS.login}`, this.formJson)
      .then((res) => { this.submitSuccess(res.body) })
      .catch((err) => { this.submitErrors(err.body.error); console.log(this.formJson) })
    }
  },
  components: {
    Popup,
    FormMessages
  }
}
</script>