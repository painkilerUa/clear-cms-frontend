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
import { mapActions } from 'vuex'
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
        client_id: '1_7v14gfa6qigwwgss80kg484o8wc880owgo4s400kg4w4g4kgc',
        client_secret: '5keno5qzn5gcoosswckcw0sgccggsk8ws4scggosgcgs08wksw'
      },
      secondPassword: null
    }
  },
  methods: {
    ...mapActions([
      'redirect'
    ]),
    sendFormRequest () {
      this.$http.post(api.URLS.login, this.formJson)
      .then((res) => {
        localStorage.setItem('token', res.body.access_token)
        localStorage.setItem('username', this.formInfo.username)
        this.submitSuccess(res.body)
        this.$store.commit('authLoginSuccess')
        this.$store.commit('authLoginSetUsername', this.formInfo.username)
        console.log(res)
        // this.redirect()
      })
      .catch((err) => {
        this.submitErrors(err.bodyText)
        console.log(err)
      })
    }
  },
  components: {
    Popup,
    FormMessages
  }
}
</script>