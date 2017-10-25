<template>
	<!-- .profile -->
	<div class="container">
      <div class="confirmation-popup" v-if="confirmation.isShown">
        <div class="confirmation-popup-inner" :style="confirmation.style">
          <div class="confirmation-popup-inner-caption">
            <span>Are you sure you want to perform this action?</span>
          </div>
          <div class="confirmation-popup-inner-body">
            <span>Please note that by deleting/arhiving/restoring this article you will</span>
          </div>
          <div class="confirmation-popup-inner-controll-panel">
            <button type="button" @click="clearAction">No, cancel</button>
            <button type="button" @click="confirmActionHandler">Yes, proceed</button>
          </div>
        </div>
      </div>
      <h2>Your details</h2>
      <p class="text-wrap">If you need to change any of your details edit the relevant fields below and click on update. You can change your password by entering your current and your new passwords below.</p>
      <section class="info" v-if="user">
        <article class="personal-info">
        <h2>Personal info</h2>
        <div class="form-group">
          <div class="form-element">
            <label class="form-label">First name</label>
            <input class="form-control"
                   v-model="user.personal.username"
                   v-validate="'required'">
          </div>
          <div class="form-element form-element">
            <label class="form-label">Surname</label>
            <input class="form-control"
                   v-model="user.personal.last_name"
                   v-validate="'required'">
          </div>
          <div class="form-element form-element">
            <label class="form-label">Email address</label>
            <input class="form-control"
                   v-model="user.personal.email"
                   v-validate="'required|email'">
          </div>
        </div>
        </article>

        <article class="company-info">
          <h2>Company info</h2>
          <div class="form-group form-v-select">
            <div class="form-element">
              <label class="form-label">Company name</label>
              <v-select
                disabled="true"
                v-model="user.company"/>
            </div>
            <div class="form-element form-element">
              <label class="form-label">Company role</label>
              <v-select
                disabled="true"
                v-model="user.role"/>
            </div>
          </div>
        </article>

        <article class="password-info">
          <h2>Password</h2>
          <div class="form-group">
            <div class="form-element">
              <label class="form-label">Current password</label>
              <input class="form-control"
                     type="password"
                     placeholder="Type in the current password ..."
                     v-model="user.personal.current_password">
            </div>
            <div class="form-element form-element">
              <label class="form-label">New password</label>
              <input class="form-control"
                     type="password"
                     placeholder="Type in the new password ..."
                     v-model="user.personal.plainPassword.first"
                     >
            </div>
            <div class="form-element form-element">
              <label class="form-label">Confirm new password</label>
              <input class="form-control"
                     type="password"
                     placeholder="Retype in the new password ..."
                     v-model="user.personal.plainPassword.second"
                     >
            </div>
          </div>
        </article>

        <article class="update-info">
          <button class="submit" type="button" @click="updateProfile()">Update</button>
          <!--<input  type="submit" value="Update" class="submit">-->
        </article>
      </section>

	</div>
	<!-- END:.profile -->
</template>

<script>
import api from '@/api'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'profile',
  data () {
    return {
      user: {
        personal: {
          id: '',
          username: '',
          last_name: '',
          email: '',
          current_password: '',
          plainPassword: {
            first: '',
            second: ''
          }
        },
        company: {},
        role: {}
      },
      confirmation: {
        action: '',
        isShown: false,
        articleId: null,
        i: null,
        style: {
          top: '100px'
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'getCompaniesForSelect',
      'getRolesForSelect'
    ])
  },
  methods: {
    ...mapActions([
      'getRoles',
      'getCompanies',
      'setInformationMsg'
    ]),
    getProfileData () {
      this.$http.put(api.URLS.profile, {}, api.headersAuthSettings).then((res) => {
        let personal = this.user.personal
        personal.id = res.body.id
        personal.username = res.body.username
        personal.last_name = res.body.last_name
        personal.email = res.body.email
        this.user.company = this.getCompaniesForSelect.find(item => item.value === res.body.company.id)
        this.user.role = this.getRolesForSelect.find(item => item.value === res.body.role_users[0].id)
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    },
    updateProfile () {
      if (this.disableAPI) return
      this.$validator.validateAll()
      if (this.errors.items.length) return
      let userData = {
        username: this.user.personal.username,
        lastName: this.user.personal.last_name,
        email: this.user.personal.email,
        current_password: this.user.personal.current_password,
        plainPassword: {
          first: this.user.personal.plainPassword.first,
          second: this.user.personal.plainPassword.second
        }
      }
      this.disableAPI = true
      this.$http.put(api.URLS.profile, userData, api.headersAuthSettings)
        .then((res) => {
          console.log(res)
          this.disableAPI = false
          this.getProfileData()
          alert('User has been successfully updated')
//          let infMsg = 'User has been successfully updated'
//          this.setInformationMsg({text: infMsg, className: 'success'})
        })
        .catch((err) => {
//          let infMsg = "User has't been successfully updated"
//          this.setInformationMsg({text: infMsg, className: 'success'})
          this.getProfileData()
          alert('User has not been successfully updated')
          this.disableAPI = false
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProfileData()
    this.getRoles()
    this.getCompanies()
    document.title = 'Clear Assured – Your details'
  }
}
</script>

<style src='@/assets/scss/components/profile.scss' lang='scss' scoped />
