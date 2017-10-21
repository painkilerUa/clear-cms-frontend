<template>
  <div id="app" class="app login">
    <div class="wrapper">
      <Authorization-header />
      <main class="main">
        <div class="center">
          <div class="main-title">Reset password</div>
          <div class="main-reset">
            <input type="password" name="" placeholder="New Password" v-model="formInfo.fos_user_resetting_form.plainPassword.first"/>
            <input type="password" name="" placeholder="Retype Password" v-model="formInfo.fos_user_resetting_form.plainPassword.second" />
            <input type="submit" name="" value="Reset" @click="reserPassword()"/>
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
      }
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
//      let token = this.$route.params.token
//      this.$http.post(api.URLS.forgotPassword + token, JSON.stringify(this.formInfo), {})
//        .then((res) => {
//          console.log(res)
//        })
//        .catch((err) => { this.submitErrors(err.body) })
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
<style>
  .login .clear {clear:both; display:block;}
  .login .wrapper {min-height:100%; margin:0 0 -108px 0; background:url('http://eromagency.com/tmp/tcc/img/login-hero.jpg') 50% calc(50% + 62px) no-repeat; background-size:cover;}
  .login .center {width:60%; max-width:1152px; margin:0 auto; min-width:320px;}
  .login .front-header {height:62px; background:#ffffff;}
  .login .logo-link {float:left; margin:18px 0 18px 0;}
  .login .front-header-capabilities {float:right; padding:21px 0 21px 0;}
  .login .front-header-capabilities-colors img,
  .login .front-header-capabilities-colors img {width:20px; margin-right:-4px;}
  .login .main {color:#ffffff;}
  .login .main-title {padding:120px 70px 0 70px; font-size:29pt; text-transform:uppercase; font-weight:bold; text-align:center;}
  .login .main-video {display:block; margin:90px auto 0 auto; width:54%; padding:15px 0 20px 0; color:#ffffff; text-decoration:none;}
  .login .main-video-start {width:57px; height:57px; margin:0 auto; background:url('http://eromagency.com/tmp/tcc/img/play.svg') 0 0 no-repeat;}
  .login .main-video-label {font-size:13pt; font-weight:bold; padding:35px 0 0 0; text-align:center;}
  .login .main-text {font-size:12pt; padding:120px 40px 30px 40px;}
  .login .main-text-left {width:47%; float:left; margin:0 6% 0 0;}
  .login .main-text-right {width:47%; float:right;}
  .login .push {height:108px;}
  .login .front-footer {height:108px; background:#1c1c1d;}
  .login .user-area {float:left; margin:35px 0 30px 0;}
  .login input {font-family:Arial; font-size:12pt; float:left; margin:0 20px 0 0; height:40px; border:none; box-sizing:border-box; padding:10px; display:block;}
  .login input::-webkit-input-placeholder {color:#000000;}
  .login input:-moz-placeholder {color:#000000; opacity:1;}
  .login input::-moz-placeholder {color:#000000; opacity:1;}
  .login input:-ms-input-placeholder {color:#000000;}
  .login input::-ms-input-placeholder {color:#000000;}
  .login input[type=text], .login .user-area input[type=password] {width:240px; background:#ffffff; color:#000000;}
  .login input[type=submit] {width:105px; background:#257281; color:#ffffff; font-weight:bold; text-transform:uppercase; font-size:12pt;}
  .login .user-area.error input[type=text], .login .user-area.error input[type=password], .login .main-reset.error input[type=text], .login .main-reset.error input[type=password] {border:2px solid #d8656a;}
  .login .user-area-lost-password {font-size:10pt; color:#257281; line-height:40px;}
  .login .front-footer-social-list {float:right; margin:40px 0 35px 0;}
  .login .front-footer-social-list li {margin-right:7px; float:left;}
  .login .front-footer-social-list a {width:30px; height:30px;}
  .login .lost-pass-label {float:left; font-size:11pt; color:#ffffff; padding:0 40px 0 0; line-height:14pt;}
  .login .user-area.lost-error .lost-pass-label {color:#d8656a; padding-top:10px;}
  .login .user-area.lost-success .lost-pass-label {color:#22b6cd;}
  .login .main-reset {padding:80px 0 0 0;}
  .login .main-reset input {float:none; margin:0 auto 20px auto;}
  .login .main-reset input[type=submit] {background:#000000; margin-top:20px;}
  .login .main-reset-label {text-align:center; font-size:16pt; padding:40px 0 0 0;}
  .login .main-video-player {margin:100px 0 0 0;}
  .login .main-video-player video {width:100%; height:auto;}

  @media (max-width: 1750px) {
    .login .center {width:80%;}
  }

  @media (max-width: 1320px) {
    .login .center {width:90%;}
  }

  @media (max-width: 1160px) {
    .login .center {width:auto; padding:0 10px;}
  }

  @media (max-width: 1160px) {
    .login .front-footer-social-list {display:none;}
  }

  @media (max-width: 800px) {
    .login .front-header {height:75px; background:#ffffff;}
    .login .front-header .center {padding:0;}
    .login .logo-link {margin:23px 0 18px 0;}
    .login .logo-img {width:266px; height:31px;}
    .login .logo-link {margin-left:30px;}
    .login .front-header-capabilities {display:none;}
    .login .main-title {font-size:21pt; padding:20px 10px 0 10px;}
    .login .main-video {margin:0; width:100%; padding:15px 0 20px 0;}
    .login .main-video-label {font-size:14pt; padding:25px 0 0 0;}
    .login .main-text {padding:30px 0 10px 0;}
    .login .main-text-left {width:100%;}
    .login .main-text-right {width:100%;}
    .login .push {height:225px;}
    .login .front-footer {position:fixed; width:100%; left:0; bottom:0; height:auto;}
    .login .user-area {margin:20px 0; width:100%; text-align:center;}
    .login .user-area input {float:none; margin:0 auto 20px auto;}
    .login .user-area-lost-password {line-height:normal;}
    .login .lost-pass-label {float:none; padding:0 0 20px 0;}
    .login .user-area.lost input[type=submit], .login .user-area.lost-error input[type=submit] {margin-bottom:0;}

  }
</style>
