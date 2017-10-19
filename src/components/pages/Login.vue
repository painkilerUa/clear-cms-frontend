<template>
  <div>
    <Authorization-header />
    <main class="main">
      <div class="main-container">
        <h1>Lloyd’s is the world’s specialist insurance and reinsurance market</h1>
      </div>
      <section class="wrapper flex-container wrap">
        <div class="flex-block">
          <p>With expertise earned over centuries, Lloyd’s is the foundation of the insurance industry and the future of
            it. Led by expert underwriters and brokers in more than 200 territories, the Lloyd’s market develops the
            essential, complex and critical insurance needed to underwrite human progress.</p>
          <p>Backed by diverse global capital and excellent financial ratings, Lloyd’s works with a global network of
            over 4000 insurance professionals to grow the insured world – building resilience for businesses and local
            communities and strengthening economic growth around the world. </p>
        </div>
        <div class="flex-block">
          <p>As a result the Lloyd’s market attracts the world’s best insurance talent and wants to continue to attract
            diverse talent from a wide variety of backgrounds. This commitment is led by Inclusion@Lloyd’s, an
            initiative where the Corporation of Lloyd’s and organisations in the Lloyd’s market work in partnership
            to embrace and embed diversity in their individual businesses by widening perspectives and sharing best
            practice.</p>
          <p>This portal, developed with the Clear Company, provides access to practical resources and examples of best
            practice to support the Lloyd’s market increase diversity and embed inclusive practices within their
            organisations.</p>
        </div>
      </section>
      <article class="footer">
        <section class="wrapper bottom flex-container">
          <div class="footer-form flex">
            <form>
              <input type="email" class="form email" placeholder="Email" v-model="formInfo.username">
              <input type="" class="form password" placeholder="Password" v-model="formInfo.password">
              <button type="button" class="form login" @click="sendFormRequest()">Login</button>
              <a class="lost-password" href="">Lost you password?</a>
            </form>
          </div>
          <div class="foter-icon flex">
            <ul class="front-footer-social-list">
              <li class="front-footer-social-list__item">
                <a href="https://www.youtube.com/user/UKClearKit" target="_blank" class="front-footer-social-list__link">
                  <img
                          width="14"
                          height="10"
                          src="../../assets/img/main/footer/svg/youtube.svg"
                          alt="youtube"
                          class="front-footer-social-list__icon" />
                </a>
              </li>
              <!--<li class="front-footer-social-list__item">-->
                <!--<a href="#" class="front-footer-social-list__link">-->
                  <!--<img-->
                          <!--width="12.5"-->
                          <!--height="12.5"-->
                          <!--src="../../assets/img/main/footer/svg/instagram.svg"-->
                          <!--alt="instagram"-->
                          <!--class="front-footer-social-list__icon" />-->
                <!--</a>-->
              <!--</li>-->
              <!--<li class="front-footer-social-list__item">-->
                <!--<a href="#" class="front-footer-social-list__link">-->
                  <!--<img-->
                          <!--width="7.7"-->
                          <!--height="14.7"-->
                          <!--src="../../assets/img/main/footer/svg/facebook.svg"-->
                          <!--alt="facebook"-->
                          <!--class="front-footer-social-list__icon" />-->
                <!--</a>-->
              <!--</li>-->
              <li class="front-footer-social-list__item">
                <a href="https://twitter.com/@TheClearCo" target="_blank" class="front-footer-social-list__link">
                  <img
                          width="15.8"
                          height="12.9"
                          src="../../assets/img/main/footer/svg/twitter.svg"
                          alt="twitter"
                          class="front-footer-social-list__icon" />
                </a>
              </li>
              <!--<li class="front-footer-social-list__item">-->
                <!--<a href="#" class="front-footer-social-list__link">-->
                  <!--<img-->
                          <!--width="20"-->
                          <!--height="12"-->
                          <!--src="../../assets/img/main/footer/svg/googlePlus.svg"-->
                          <!--alt="googlePlus"-->
                          <!--class="front-footer-social-list__icon" />-->
                <!--</a>-->
              <!--</li>-->
              <li class="front-footer-social-list__item">
                <a href="https://www.linkedin.com/company/the-clear-company/" target="_blank" class="front-footer-social-list__link">
                  <img
                          width="20"
                          height="12"
                          src="../../assets/img/main/footer/svg/linkedIn.svg"
                          alt="linkedIn"
                          class="front-footer-social-list__icon" />
                </a>
              </li>
              <!--<li class="front-footer-social-list__item">-->
                <!--<a href="#" class="front-footer-social-list__link">-->
                  <!--<img-->
                          <!--width="11.7"-->
                          <!--height="15.1"-->
                          <!--src="../../assets/img/main/footer/svg/pinterest.svg"-->
                          <!--alt="pinterest"-->
                          <!--class="front-footer-social-list__icon" />-->
                <!--</a>-->
              <!--</li>-->
              </ul>
          </div>
        </section>
      </article>
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
      'redirect',
      'getRoles',
      'getCompanies'
    ]),
    sendFormRequest () {
      let auth = {
        grant_type: 'password',
        client_id: this.formInfo.client_id,
        client_secret: this.formInfo.client_secret,
        username: this.formInfo.username,
        password: this.formInfo.password
      }
      this.$http.post(api.URLS.login, auth)
      .then((res) => {
        console.log('sendFormRequest', res)
        localStorage.setItem('token', res.body.access_token)

        this.getRoles()
        this.getCompanies()

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
