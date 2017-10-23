<template>
  <div id="app" class="app login">
    <div class="wrapper">
      <Authorization-header />
      <main class="main">
        <div class="center">
          <div class="main-title">Reset password</div>
          <div class="main-reset" :class="{error: isError}">
            <input type="password" name="first_password" placeholder="New Password" v-model="formInfo.fos_user_resetting_form.plainPassword.first" v-validate="'required'" data-vv-as="'Password'" />
            <input type="password" name="" placeholder="Retype Password" v-model="formInfo.fos_user_resetting_form.plainPassword.second" v-validate="'required|confirmed:first_password'" data-vv-as="'Second password'"/>
            <input type="submit" name="" value="Reset" @click="reserPassword()"/>
            <div class="main-reset-label" v-if="successfullyReset">Your password has been successfully reset.</div>
          </div>
        </div>
      </main>
      <div class="push"></div>
    </div>
  </div>
	<!-- .reset -->
	<!--<div class="reset">-->
		<!--<h1>Reset Password</h1>-->
		<!--<form-->
		<!--name="fos_user_resetting_form"-->
		<!--method="post"-->
		<!--:action="formAction"-->
    <!--@submit.prevent="submit"-->
		<!--class="form">-->
		    <!--&lt;!&ndash; form-element &ndash;&gt;-->
        <!--<div class="form-element">-->
            <!--<input-->
            <!--type="password"-->
            <!--:name="passwordsNames.first"-->
            <!--v-model="formInfo.fos_user_resetting_form.plainPassword.first"-->
            <!--v-validate="'required'"-->
            <!--data-vv-as='"Password"'-->
            <!--placeholder="New Password"-->
            <!--class="form-control"-->
            <!--required>-->
            <!--<div -->
            <!--v-if="errors.has('fos_user_resetting_form[plainPassword][first]')"-->
            <!--class="form-errors">{{ errors.first('fos_user_resetting_form[plainPassword][first]') }}</div>-->
        <!--</div>-->
		    <!--&lt;!&ndash; END:form-element &ndash;&gt;-->
		    <!--&lt;!&ndash; form-element &ndash;&gt;-->
        <!--<div class="form-element">-->
            <!--<input-->
            <!--type="password"-->
            <!--:name="passwordsNames.second"-->
            <!--v-model="formInfo.fos_user_resetting_form.plainPassword.second"-->
            <!--data-vv-as='"Repeat Password"'-->
            <!--v-validate="'required|confirmed:fos_user_resetting_form[plainPassword][first]'"-->
            <!--placeholder="Repeat new password"-->
            <!--class="form-control"-->
            <!--required>-->
            <!--<div -->
            <!--v-if="errors.has('fos_user_resetting_form[plainPassword][second]')"-->
            <!--class="form-errors">{{ errors.first('fos_user_resetting_form[plainPassword][second]') }}</div>-->
        <!--</div>-->
        <!--&lt;!&ndash; END:form-element &ndash;&gt;-->
    		<!--<button-->
    		<!--type="submit"-->
    		<!--class="form-control form-submit">-->
    		<!--Change password</button>-->
		<!--</form>-->
	<!--</div>-->
	<!-- END:.reset -->
</template>

<script>
import api from '@/api'
import forms from '@/mixins/forms'
import FormMessages from '@/components/common/FormMessages'
import AuthorizationHeader from '@/components/main/common/AuthorizationHeader'

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
      },
      successfullyReset: false,
      isError: false
    }
  },
  computed: {
    formAction () {
      return api.serverURL + window.location.pathname
    }
  },
  methods: {
    sendFormRequest () {
      this.$router.push('/')
    },
    reserPassword () {
      this.$validator.validateAll()
      if (this.errors.items.length) {
        this.isError = true
        return
      }
      let token = this.$route.params.token
      this.$http.post(api.URLS.resetPassword + token, JSON.stringify(this.formInfo), {})
        .then((res) => {
          console.log(res)
          this.successfullyReset = true
          setTimeout(() => {
            this.$router.push('/login')
          }, 3000)
        })
        .catch((err) => {
          console.log(err)
          this.$router.push('/error')
//          this.submitErrors(err.body)
        })
    }
  },
  created () {
    document.title = 'Clear Assured – reset your password'
  },
  components: {
    FormMessages,
    AuthorizationHeader
  }
}
</script>
<style src="@/assets/scss/main/loginForAllPage.scss" lang="scss" scoped></style>
