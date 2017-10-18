<template>
  <div>
    <Authorization-header />
    <main class="main">
      <div class="main-container">
        <h1>Lloyd’s is the world’s specialist insurance and reinsurance market</h1>
      </div>
    </main>
    <!--<div class="login">-->
      <!--<popup :title="title" :description="description" :modal="true">-->
        <!--&lt;!&ndash; popup-body &ndash;&gt;-->
        <!--<template slot="body">-->
          <!--&lt;!&ndash; .form &ndash;&gt;-->
          <!--<form action="#" class="form" @submit.prevent="submit">-->
            <!--&lt;!&ndash; .form-element &ndash;&gt;-->
            <!--<div class="form-element">-->
              <!--<input type="text" name="User Name" v-model="formInfo.username" data-vv-as='"User Name"' class="form-control" v-validate="'required'" placeholder="User Name" />-->
              <!--<div v-if="errors.has('User Name')" class="form-errors">{{ errors.first('User Name') }}</div>-->
            <!--</div>-->
            <!--&lt;!&ndash; END:.form-element &ndash;&gt;-->
            <!--&lt;!&ndash; .form-element &ndash;&gt;-->
            <!--<div class="form-element">-->
              <!--<input type="password" name="PasswordFirst" v-model="formInfo.password" data-vv-as='"PasswordFirst"' class="form-control" v-validate="'required'" placeholder="Password" />-->
              <!--<div v-if="errors.has('PasswordFirst')" class="form-errors">{{ errors.first('PasswordFirst') }}</div>-->
            <!--</div>-->
            <!--&lt;!&ndash; END:.form-element &ndash;&gt;-->
            <!--&lt;!&ndash; .form-element &ndash;&gt;-->
            <!--<div class="form-element">-->
              <!--<input type="hidden" name="PasswordSecond" :value="secondPasswordComputed" />-->
            <!--</div>-->
            <!--&lt;!&ndash; END:.form-element &ndash;&gt;-->
            <!--<button type="submit" class="form-control form-submit">Login</button>-->
            <!--<form-messages :messages="formServerMessages" />-->
          <!--</form>-->
          <!--&lt;!&ndash; END:.form &ndash;&gt;-->
        <!--</template>-->
        <!--&lt;!&ndash; END:popup-body &ndash;&gt;-->
        <!--&lt;!&ndash; popup-footer &ndash;&gt;-->
        <!--<template slot="footer">-->
          <!--&lt;!&ndash; popup-infolinks &ndash;&gt;-->
          <!--<ul class="popup-infolinks">-->
            <!--<li class="popup-infolinks__item">-->
              <!--<router-link class="popup-infolinks__link" :to="{name: 'forgot-password'}">Forgot password?</router-link>-->
            <!--</li>-->
            <!--&lt;!&ndash;<li class="popup-infolinks__item">&ndash;&gt;-->
              <!--&lt;!&ndash;<router-link class="popup-infolinks__link" :to="{name: 'register'}">Not registered yet?</router-link>&ndash;&gt;-->
            <!--&lt;!&ndash;</li>&ndash;&gt;-->
          <!--</ul>-->
          <!--&lt;!&ndash; END:popup-infolinks &ndash;&gt;-->
        <!--</template>-->
        <!--&lt;!&ndash; END:popup-footer &ndash;&gt;-->
      <!--</popup>-->
    <!--</div>-->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import api from '@/api'
import forms from '@/mixins/forms'
import Popup from '@/components/common/Popup'
import FormMessages from '@/components/common/FormMessages'
import AuthorizationHeader from '@/components/main/common/AuthorizationHeader'

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
        client_id: '2_659vq9a3czggcws88wcws8s4kc8gc8gcss4wog4cwcsk08ggkg',
        client_secret: '5ncmjzrt9ps8808cskk8ogwwgwkgks8ggc0kskg0cw48s08ks4'
      },
      secondPassword: null
    }
  },
  computed: {
    secondPasswordComputed () {
      return this.formInfo.password
    }
  },
  methods: {
    ...mapActions([
      'redirect'
    ]),
    sendFormRequest () {
      this.$http.post(api.URLS.login, this.formJson)
      .then((res) => {
        console.log('sendFormRequest', res)
        localStorage.setItem('token', res.body.access_token)
        this.$store.commit('authLoginSuccess')
        let headers = { headers: {'Authorization': `Bearer ${res.body.access_token}`} }
        this.$http.put(api.URLS.profile, {}, headers)
        .then((res) => {
          console.log(res)
          this.$http.put(api.URLS.userLastLogin + res.body.id, {}, headers)
          .then((res) => {
            console.log('Last login', res)
          })
          .catch((err) => {
            return err
          })
          console.log(res)
          let username = res.body.username ? res.body.username : ''
          localStorage.setItem('username', username)
          this.submitSuccess(res.body)
          this.$store.commit('authLoginSetUsername', username)
          this.redirect()
        })
        .catch((err) => {
          return err
        })
      })
      .catch((err) => {
        this.submitErrors(err.bodyText)
        console.log(err)
      })
    }
  },
  components: {
    Popup,
    FormMessages,
    AuthorizationHeader
  }
}
</script>
<style src="@/assets/scss/main/login.scss" lang="scss" scoped></style>
