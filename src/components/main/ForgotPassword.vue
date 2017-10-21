<template>
  <div id="app" class="app login">
    <div class="wrapper">
      <Authorization-header />
      <main class="main">
        <div class="center">
          <div class="main-title" v-if="isShown">Lloyd's is the world's specialist insurance and reinsurance market</div>
          <a href="#" class="main-video" @click.prevent="playVideo" v-if="isShown">
            <div class="main-video-start"></div>
            <div class="main-video-label">Watch Dominic Christian (CEO - Aon UK Ltd, Chair - Inclusion@Lloyd's) talking about the importance of diversity and inclusion</div>
          </a>
          <div class="main-text" v-if="isShown">
            <div class="main-text-left">
              <p>With expertise earned over centuries, Lloyd's is the foundation of the insurance industry and the future of it. Led by expert underwriters and brokers in more than 200 territories, the Lloyd's market develops the essential, complex and critical insurance needed to underwrite human progress.</p>
              <p>Backed by diverse global capital and excellent financial ratings, Lloyd's works with a global network of over 4000 insurance professionals to grow the insured world - building resilience for businesses and local communities and strengthening economic growth around the world.</p>
            </div>
            <div class="main-text-right">
              <p>As a result the Lloyd's market attracts the world's best insurance talent and wants to continue to attract diverse talent from a wide variety of backgrounds. This commitment is led by Inclusion@Lloyd's, an initiative where the Corporation of Lloyd's and organisations in the Lloyd's market work in partnership to embrace and embed diversity in their individual businesses by widening perspectives and sharing best practice.</p>
              <p>This portal, developed with the Clear Company, provides access to practical resources and examples of best practice to support the Lloyd's market increase diversity and embed inclusive practices within their organisations.</p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="main-video-player" v-show="!isShown">
            <video controls id="video">
              <source src="../../assets/video/ClearAssuredVideo.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </main>
      <div class="push"></div>
    </div>
    <footer class="front-footer">
      <div class="center flex">
        <div class="user-area lost" :class="{'lost-error': !!errors.has('email'), 'lost-success': emailResived}">
          <div class="lost-pass-label" v-if="emailResived && !errors.has('email')">Your request was received. If the email you entered is associated with a user,<br />you will receive an email with instructions to reset your password.</div>
          <div class="lost-pass-label" v-if="!errors.has('email') && !emailResived">Enter your email address and you will be sent<br />instructions on how to reset your password.</div>
          <div class="lost-pass-label" v-if="errors.has('email')">Please enter a valid email address.</div>
          <input type="text" data-vv-name="email" placeholder="Email" v-model="formInfo.email" v-validate="'required|email'"/>
          <input type="submit" name="" value="Submit" @click="sendFormRequest"/>
        </div>
        <ul data-v-85022b8e="" class="front-footer-social-list">
          <li data-v-85022b8e="" class="front-footer-social-list__item">
            <a data-v-85022b8e="" href="#" class="front-footer-social-list__link"><img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yOTMgMzg4LjI4OSAyNCAxNy43MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjkzIDM4OC4yODkgMjQgMTcuNzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNmZmY7fQ0KPC9zdHlsZT4NCjxwYXRoIGlkPSJGaWxsLTEiIGNsYXNzPSJzdDAiIGQ9Ik0tMjc2Ljg0MSwzOTcuNzg5bC02LjQyOSwzLjhjLTAuNDk3LDAuMjk0LTEuMTI1LTAuMDY2LTEuMTI1LTAuNjQ1di03LjYNCgljMC0wLjU3OSwwLjYyOC0wLjkzOSwxLjEyNS0wLjY0NWw2LjQyOSwzLjhDLTI3Ni4zNTEsMzk2Ljc4OC0yNzYuMzUxLDM5Ny40OTktMjc2Ljg0MSwzOTcuNzg5IE0tMjY5LjM5NiwzOTAuNDQ2DQoJYy0wLjA4NC0wLjY5OS0wLjc1Mi0xLjM1Ny0xLjQ2OC0xLjQ1OGMtNi44NDgtMC45MzItMTMuNDIzLTAuOTMyLTIwLjI3MSwwYy0wLjcxNiwwLjEwMS0xLjM4NCwwLjc2LTEuNDY4LDEuNDU4DQoJYy0wLjUyOSw0LjQ1LTAuNTI5LDguOTQ2LDAsMTMuMzk2YzAuMDg0LDAuNjk5LDAuNzUyLDEuMzU4LDEuNDY4LDEuNDU4YzYuODQ4LDAuOTMyLDEzLjQyMywwLjkzMiwyMC4yNzEsMA0KCWMwLjcxNi0wLjEwMSwxLjM4NC0wLjc2LDEuNDY4LTEuNDU4Qy0yNjguODY4LDM5OS4zOTItMjY4Ljg2OCwzOTQuODk1LTI2OS4zOTYsMzkwLjQ0NiIvPg0KPC9zdmc+DQo=" alt="youtube" class="front-footer-social-list__icon" width="14" height="10">
            </a>
          </li>
          <li data-v-85022b8e="" class="front-footer-social-list__item">
            <a data-v-85022b8e="" href="#" class="front-footer-social-list__link"><img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA3LjY2OCAxNC42NjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDcuNjY4IDE0LjY2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0UyRTJFMjt9DQo8L3N0eWxlPg0KPHBhdGggaWQ9IkZpbGwtNCIgY2xhc3M9InN0MCIgZD0iTTYuMTE1LDIuNDc1QzYuNTcsMi40NTgsNy4wMjUsMi40Nyw3LjQ4MSwyLjQ3aDAuMTg3VjAuMTA2QzcuNDI2LDAuMDgzLDcuMTcxLDAuMDQ4LDYuOTE4LDAuMDM1DQoJYy0wLjQ2Ny0wLjAyLTAuOTM1LTAuMDQzLTEuNDAyLTAuMDMyYy0wLjcxMywwLjAxNS0xLjM4OCwwLjE4OC0xLjk3OCwwLjYxQzIuODYyLDEuMDk4LDIuNDkxLDEuNzgxLDIuMzQ5LDIuNTg2DQoJQzIuMjkxLDIuOTE3LDIuMjc1LDMuMjYyLDIuMjY3LDMuNTk5QzIuMjU0LDQuMTMsMi4yNjQsNC42NTksMi4yNjUsNS4xOXYwLjE5OUgwdjIuNjRoMi4yNTF2Ni42MzVoMi43NTJWOC4wNGgyLjI0NQ0KCWMwLjExNC0wLjg3OSwwLjIyOC0xLjc0NywwLjM0NS0yLjY1MmMtMC4xOCwwLTAuMzQyLTAuMDAyLTAuNTA1LDBjLTAuNjM4LDAuMDAzLTIuMTAzLDAtMi4xMDMsMHMwLjAwNi0xLjMwOSwwLjAyMS0xLjg3Ng0KCUM1LjAyOSwyLjczNCw1LjQ5MSwyLjQ5Nyw2LjExNSwyLjQ3NSIvPg0KPC9zdmc+DQo=" alt="facebook" class="front-footer-social-list__icon" width="7.7" height="14.7">
            </a>
          </li>
          <li data-v-85022b8e="" class="front-footer-social-list__item">
            <a data-v-85022b8e="" href="#" class="front-footer-social-list__link">
              <img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNS44MjggMTIuODYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE1LjgyOCAxMi44NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0UyRTJFMjt9DQo8L3N0eWxlPg0KPHBhdGggaWQ9IkZpbGwtOSIgY2xhc3M9InN0MCIgZD0iTTQuNzk5LDEwLjA2NGMtMS42OS0wLjA1OS0yLjc0Ny0xLjI3LTMuMDI2LTIuMjU0QzIuMjQ0LDcuOSwyLjcwNyw3Ljg4MiwzLjE2Nyw3Ljc2OA0KCWMwLjAxMy0wLjAwMywwLjAyNC0wLjAxLDAuMDQ3LTAuMDIxYy0wLjkxNS0wLjIxMy0xLjYyMi0wLjcwMi0yLjExMy0xLjQ5QzAuNzc3LDUuNzMzLDAuNjIxLDUuMTYsMC42MjYsNC41MzENCglDMS4wODIsNC43NzQsMS41Niw0LjkxLDIuMDczLDQuOTI0Yy0wLjY4OC0wLjQ5Ni0xLjE1LTEuMTQyLTEuMzM5LTEuOTdjLTAuMTg3LTAuODI1LTAuMDY2LTEuNjEsMC4zNDktMi4zNTENCglDMi44NDQsMi42NzMsNS4wNzIsMy44MSw3Ljc5MSwzLjk5N2MtMC4wMTgtMC4xMy0wLjA0LTAuMjQyLTAuMDUzLTAuMzU2QzcuNjQ4LDIuODc2LDcuOCwyLjE2NCw4LjIxNSwxLjUxNw0KCUM4LjczMSwwLjcwNyw5LjQ3LDAuMjAzLDEwLjQyLDAuMDQ5YzEuMDk0LTAuMTc5LDIuMDQ5LDAuMTMzLDIuODQ3LDAuOTA2YzAuMDU0LDAuMDUyLDAuMDk4LDAuMDY4LDAuMTczLDAuMDUyDQoJYzAuNjY4LTAuMTQ2LDEuMjk5LTAuMzg2LDEuODkyLTAuNzI4YzAuMDEzLTAuMDA4LDAuMDI4LTAuMDE1LDAuMDQyLTAuMDIxYzAuMDAzLTAuMDAyLDAuMDA4LTAuMDAyLDAuMDIxLTAuMDAyDQoJYy0wLjI1NiwwLjc1NC0wLjcyNSwxLjMzNy0xLjM5MiwxLjc2N2MwLjYzLTAuMDcsMS4yMzEtMC4yMzcsMS44MTEtMC40ODdjMC4wMDUsMC4wMDYsMC4wMDksMC4wMTEsMC4wMTMsMC4wMTUNCgljLTAuMTI0LDAuMTYyLTAuMjQ0LDAuMzI5LTAuMzc0LDAuNDg3Yy0wLjM0NSwwLjQyNS0wLjc0MSwwLjc5OS0xLjE4MiwxLjEyMWMtMC4wMzgsMC4wMjgtMC4wNTUsMC4wNTMtMC4wNTQsMC4xMDMNCgljMC4wMTgsMC40ODIsMCwwLjk2Mi0wLjA2LDEuNDQxYy0wLjEyNSwxLjAwOS0wLjQwNywxLjk3MS0wLjgzOSwyLjg5MWMtMC40NDYsMC45NS0xLjAyNiwxLjgwNi0xLjc1OCwyLjU2DQoJYy0xLjIzOSwxLjI3OC0yLjczMiwyLjEwNC00LjQ3LDIuNDg3Yy0wLjU5NiwwLjEzMS0xLjIsMC4xOTctMS44MTIsMC4yMTVjLTEuODc1LDAuMDU0LTMuNjA5LTAuNDExLTUuMjAzLTEuMzk0DQoJQzAuMDU1LDExLjQ0OSwwLjAzNSwxMS40MzUsMCwxMS40MTJjMS4xMzUsMC4xMjEsMi4yMTQtMC4wMjQsMy4yNTMtMC40NDhDMy44MDUsMTAuNzM4LDQuMzE2LDEwLjQ0MSw0Ljc5OSwxMC4wNjQiLz4NCjwvc3ZnPg0K" alt="twitter" class="front-footer-social-list__icon" width="15.8" height="12.9">
            </a>
          </li>
          <li data-v-85022b8e="" class="front-footer-social-list__item">
            <a data-v-85022b8e="" href="#" class="front-footer-social-list__link"><img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMy4zMDcgMTMuMjU3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMy4zMDcgMTMuMjU3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRTJFMkUyO30NCjwvc3R5bGU+DQo8ZyBpZD0iWE1MSURfNDBfIj4NCgk8cmVjdCBpZD0iWE1MSURfNDdfIiB4PSIwLjIxOSIgeT0iNC40MDIiIGNsYXNzPSJzdDAiIHdpZHRoPSIyLjc2MSIgaGVpZ2h0PSI4Ljg1NSIvPg0KCTxwYXRoIGlkPSJYTUxJRF80OF8iIGNsYXNzPSJzdDAiIGQ9Ik0xLjYsMEMwLjcxNCwwLDAsMC43MTcsMCwxLjU5NWMwLDAuODgxLDAuNzE0LDEuNTk3LDEuNiwxLjU5Nw0KCQljMC44ODIsMCwxLjU5OS0wLjcxNiwxLjU5OS0xLjU5N0MzLjE5OSwwLjcxNywyLjQ4MiwwLDEuNiwweiIvPg0KCTxwYXRoIGlkPSJYTUxJRF80OV8iIGNsYXNzPSJzdDAiIGQ9Ik0xMC4wMDEsNC4xODJjLTEuMzQyLDAtMi4yNDIsMC43MzQtMi42MSwxLjQyOUg3LjM1NHYtMS4yMUg0LjcxdjguODU1aDIuNzU1VjguODc1DQoJCWMwLTEuMTU0LDAuMjE5LTIuMjcxLDEuNjU1LTIuMjcxYzEuNDEyLDAsMS40MzMsMS4zMjEsMS40MzMsMi4zNDh2NC4zMDVoMi43NTVWOC4zOTlDMTMuMzA3LDYuMDE0LDEyLjc5Myw0LjE4MiwxMC4wMDEsNC4xODJ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==" alt="linkedIn" class="front-footer-social-list__icon" width="20" height="12">
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import api from '@/api'
import forms from '@/mixins/forms'
import Popup from '@/components/common/Popup'
import FormMessages from '@/components/common/FormMessages'
import AuthorizationHeader from '@/components/main/common/AuthorizationHeader'

export default {
  name: 'forgot-password',
  mixins: [forms],
  data () {
    return {
      emailResived: false,
      notificationMsg: 'Enter your email address and you will be sent<br />instructions on how to reset your password.',
      resetToken: '',
      title: 'Forgot Password',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium sed necessitatibus enim recusandae sunt numquam, ducimus asperiores laborum! Reprehenderit!',
      formInfo: {
        email: ''
      },
      isShown: true
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
      this.$validator.validateAll()
      if (this.errors.items.length) return
      this.$http.post(api.URLS.forgotPassword, JSON.stringify(this.formInfo))
      .then((res) => {
        this.emailResived = true
        setTimeout(() => { this.emailResived = false }, 15000)
//        this.notificationMsg = res.body
        console.log(res)
        this.submitSuccess(res.body)
      })
      .catch((err) => { this.submitErrors(err.body) })
    },
    playVideo () {
      this.isShown = false
      document.getElementById('video').play()
    }
  },
  created () {
    document.title = 'Clear Assured – forgot password'
  },
  components: {
    Popup,
    FormMessages,
    AuthorizationHeader
  }
}
</script>
<style src="@/assets/scss/main/loginForAllPage.scss" lang="scss" scoped></style>
