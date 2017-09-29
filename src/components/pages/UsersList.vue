<template>
  <div>
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
    <div class="add-new-user">
      <div class="add-new-user-form" v-if="newUserForm.isShown">
        <h3>Add new user</h3>
        <div class="add-new-user-body">
          <div class="add-new-user-body-row">
            <div class="add-new-user-body-row-half-body">
              <label for="new-user-name">Name</label>
              <input type="text"
                     v-model="newUser.name"
                     id="new-user-name"
                     v-validate="'required'"
                     name="Name"
                     placeholder="Write user’s name">
              <div
                v-if="errors.has('Name')"
                class="add-new-user-body-row-half-body-errors">{{ errors.first('Name') }}
              </div>
            </div>
            <div class="add-new-user-body-row-half-body">
              <label for="new-user-surname">Surname</label>
              <input type="text"
                     id="new-user-surname"
                     v-validate="'required'"
                     name="Surname"
                     placeholder="Write user’s surname"
                     v-model="newUser.surname" />
              <div
                v-if="errors.has('Surname')"
                class="add-new-user-body-row-half-body-errors">{{ errors.first('Surname') }}
              </div>
            </div>
          </div>
          <div class="add-new-user-body-row">
            <div class="add-new-user-body-row-inner-data">
              <label for="new-user-email">Email</label>
              <input type="text"
                     id="new-user-email"
                     v-validate="'required|email'"
                     name="Email"
                     placeholder="Write user’s email"
                     v-model="newUser.email"/>
              <div
                v-if="errors.has('Email')"
                class="add-new-user-body-row-half-body-errors">{{ errors.first('Email') }}
              </div>
            </div>
          </div>
          <div class="add-new-user-body-row">
            <div class="add-new-user-body-row-half-body">
              <label for="new-user-company-name">Company name</label>
              <v-select
                v-model="newUser.company"
                :options="getCompaniesForSelect"
                v-validate="'required'"
                data-vv-name="Company name"
                placeholder="Select company"
                id="new-user-company-name"/>
              <div
                v-if="errors.has('Company name')"
                class="add-new-user-body-row-half-body-errors">{{ errors.first('Company name') }}
              </div>
            </div>
            <div class="add-new-user-body-row-half-body">
              <label for="new-user-company-role">Company role</label>
              <v-select
                v-model="newUser.role"
                :options="getRolesForSelect"
                v-validate="'required'"
                data-vv-name="Company role"
                placeholder="Select role in company"
                id="new-user-company-role" />
              <div
                v-if="errors.has('Company role')"
                class="add-new-user-body-row-half-body-errors">{{ errors.first('Company role') }}
              </div>
            </div>
          </div>
          <div class="add-new-user-body-row">
            <div class="add-new-user-body-row-half-body">
              <label for="new-user-password">Password</label>
              <input type="password"
                     v-model="newUser.password"
                     id="new-user-password"
                     name="Password"
                     v-validate="'required'">
              <div
                v-if="errors.has('Password')"
                class="add-new-user-body-row-half-body-errors">{{ errors.first('Password') }}
              </div>
            </div>
            <div class="add-new-user-body-row-half-body">
            </div>
          </div>
        </div>
        <div class="add-new-user-server-validation">
          <span v-for="error in serverValidation.errors">{{error}}</span>
        </div>
        <div class="add-new-user-control-panel">
          <button type="button" @click="hideAddNewUserForm">Cancel</button>
          <button type="button" @click="createNewUser()">
            <icon name="plus"></icon>
            <span>Add new user</span>
          </button>
        </div>
      </div>
    </div>
    <div class="users-list">
      <div class="users-list-heading">
        <div class="users-list-actions">
          <div class="users-list-inputwrap">
            <input type="checkbox" class="users-list-input" />
          </div>
          <v-select
            placeholder="Bulk action"
            v-model="selectedAction"
            :options="getArticleListActions" />
        </div>
        <div class="users-list-statusbar">
          <div class="users-list-statusbar__contains users-list-statusbar__block">Articles</div>
          <ul class="users-list-statuses users-list-statusbar__block">
            <li class="">101 Users</li>
          </ul>
        </div>
        <div class="users-list-add">
          <button type="button" class="users-list-add__btn" @click="newUserForm.isShown = true">
            <icon name="plus"></icon>
            <span>Add new user</span>
          </button>
        </div>
      </div>
      <div class="users-list-body">
        <table class="table table-data">
          <thead>
          <tr>
            <th class="cellpadding">ID</th>
            <th class="users-list-search-col text-left">
              <div class="table-search-wrap">
                <input
                  v-model="searchString"
                  type="search"
                  class="table-search"
                  placeholder="Search in users by name or surname..." />
              </div>
            </th>
            <th>
              <span>Email</span>
            </th>
            <th>
              <v-select placeholder="Company"
                        :options="getCompaniesForSelect"
                        v-model="company" />
            </th>
            <th>
              <v-select placeholder="Role"
                        :options="getRolesForSelect"
                        v-model="role" />
            </th>
            <th>
              <span>Last active</span>
            </th>
            <th colspan="3" class="cellpadding">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(user, i) in editedUsers">
            <td class="text-center cellpadding" v-if="user.type === 'show'">
              <input type="checkbox" :id="user.id"/>
              <label :for="user.id">{{user.id}}</label>
            </td>
            <td class="cellpadding" v-if="user.type === 'show'">{{user.username + ' ' + user.last_name}}</td>
            <td class="cellpadding" v-if="user.type === 'show'">{{user.email}}</td>
            <td class="cellpadding" v-if="user.type === 'show'">{{user.company ? user.company.name : ''}}</td>
            <td class="cellpadding" v-if="user.type === 'show'"> {{user.role_users.length ? user.role_users[0].name : ''}}</td>
            <td class="cellpadding" v-if="user.type === 'show'">3 hours ago</td>
            <td class="cellpadding" v-if="user.type === 'show'">
              <button
                type="button"
                class="table-crud-btn icon-btn"
                @click="showEditableForm(user.id)">
                <icon name="pencil"/>
              </button>
            </td>
            <td class="cellpadding" v-if="user.type === 'show'">
              <button
                v-if="user.enabled"
                type="button"
                class="table-crud-btn icon-btn"
                @click="initAction('changeUserStatus', {userId: user.id, userStatus: 0})">
                <icon name="ban"/>
              </button>
              <button
                v-if="!user.enabled"
                type="button"
                class="table-crud-btn icon-btn"
                @click="initAction('changeUserStatus', {userId: user.id, userStatus: 1})">
                <icon name="check-circle"/>
              </button>
            </td>
            <td class="cellpadding" v-if="user.type === 'show'">
              <button
                type="button"
                class="table-crud-btn icon-btn"
                @click="initAction('removeUserById', {userId: user.id})">
                <icon name="times" />
              </button>
            </td>
            <td colspan="9" v-if="user.type === 'edit'">
              <div class="edit-user">
                <div class="edit-user-row">
                  <div class="edit-user-row-ceil">
                    <input type="text"
                           v-model="user.username"
                           v-validate="'required'"
                           data-vv-name="userName"
                           data-vv-as="Name"
                           placeholder="Write user’s name">
                  </div>
                  <div class="edit-user-row-ceil">
                    <input type="text"
                           v-validate="'required'"
                           data-vv-name="userSurname"
                           data-vv-as="Surname"
                           placeholder="Write user’s surname"
                           v-model="user.last_name" />
                  </div>
                  <div class="edit-user-row-ceil">
                    <input type="text"
                           v-validate="'required|email'"
                           name="Email"
                           data-vv-name="userEmail"
                           data-vv-as="Email"
                           placeholder="Write user’s email"
                           v-model="user.email"/>
                  </div>
                  <div class="edit-user-row-ceil">
                    <v-select
                      v-model="user.company"
                      :options="getCompaniesForSelect"
                      v-validate="'required'"
                      data-vv-name="userCompanyName"
                      data-vv-as="Company Name"
                      placeholder="Select company" />
                  </div>
                  <div class="edit-user-row-ceil">
                    <v-select
                      v-model="user.role"
                      :options="getRolesForSelect"
                      v-validate="'required'"
                      data-vv-name="userCompanyRole"
                      data-vv-as="Company Role"
                      placeholder="Select role in company" />
                  </div>
                  <div class="edit-user-row-ceil">
                    <input type="password"
                           v-model="user.password"
                           name="Password"
                           data-vv-name="userPassword"
                           data-vv-as="Password"
                           placeholder="password"/>
                  </div>
                </div>
                <div class="edit-user-row">
                  <div
                    v-if="errors.has('userName') ||
                      errors.has('userSurname') ||
                      errors.has('userEmail') ||
                      errors.has('userCompanyName') ||
                      errors.has('userCompanyRole')"
                    class="edit-user-row-errors">
                    <span v-if="errors.has('userName')">{{errors.first('userName')}}</span>
                    <span v-if="errors.has('userSurname')">{{errors.first('userSurname')}}</span>
                    <span v-if="errors.has('userEmail')">{{errors.first('userEmail')}}</span>
                    <span v-if="errors.has('userCompanyName')">{{errors.first('userCompanyName')}}</span>
                    <span v-if="errors.has('userCompanyRole')">{{errors.first('userCompanyRole')}}</span>
                  </div>
                </div>
                <div class="edit-user-control-panel">
                  <button type="button" @click="discardСhanges(user.id)">Discard changes</button>
                  <button type="button" @click="editUser(user.id)">Save changes</button>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/check-circle'
import 'vue-awesome/icons/ban'
//  import 'vue-awesome/icons/search'
//  import 'vue-awesome/icons/pencil'
//  import 'vue-awesome/icons/folder'
//  import 'vue-awesome/icons/times'
//  import 'vue-awesome/icons/chevron-up'
//  import 'vue-awesome/icons/chevron-down'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'users-list',
  data () {
    return {
      users: [],
      editedUsers: [],
      getArticleListActions: ['Action 1', 'Action 2', 'Action 3'],
      selectedAction: null,
      searchString: '',
      company: null,
      role: null,
      newUser: {
        name: '',
        surname: '',
        email: '',
        company: null,
        role: null,
        password: ''
      },
      newUserForm: {
        isShown: false
      },
      serverValidation: {
        errors: []
      },
      disableAPI: false,
      confirmation: {
        action: '',
        isShown: false,
        id: null,
        style: {
          top: '100px'
        }
      }
    }
  },
  methods: {
    ...mapActions([
      'getRoles',
      'getCompanies'
    ]),
    fetchAllContentByScroll (page, limit) {
      this.$http.get(api.URLS.users + '?limit=' + limit + '&page=' + page, api.headersAuthSettings)
        .then((res) => {
          console.log(res)
          this.users = res.body.data.items
        })
        .catch((err) => {
          console.log(err)
        })
    },
    createNewUser () {
      this.$validator.validateAll()
      if (this.errors.items.length) return
      let user = {
        username: this.newUser.name,
        lastName: this.newUser.surname,
        email: this.newUser.email,
        plainPassword: {
          first: this.newUser.password,
          second: this.newUser.password
        },
        company: this.newUser.company.value
      }
      this.$http.post(api.URLS.createAdmin + this.newUser.role.value, user, api.headersAuthSettings)
        .then((res) => {
          console.log(res)
          this.users.push(res.body)
          this.newUserForm.isShown = false
          this.resetAddNewUserForm()
        })
        .catch((err) => {
          this.serverValidation.errors = err.body
          console.log(err)
        })
    },
    hideAddNewUserForm () {
      this.newUserForm.isShown = false
      this.serverValidation.errors = []
      this.resetAddNewUserForm()
    },
    resetAddNewUserForm () {
      this.newUser = {
        name: '',
        surname: '',
        email: '',
        company: null,
        role: null,
        password: ''
      }
    },
    showEditableForm (id) {
      for (let user of this.editedUsers) {
        if (user.type === 'edit') user.type = null
        if (user.id === id && user.type === null) {
          user.type = 'edit'
        }
      }
    },
    discardСhanges (id) {
      for (let user of this.editedUsers) {
        if (user.id === id && user.type === 'edit') {
          user.type = null
        }
      }
    },
    editUser (id) {
      if (this.disableAPI) return
      this.$validator.validateAll()
      if (this.errors.items.length) return
      let user = this.editedUsers.find((user) => user.id === id && user.type === 'edit')
      let userData = {
        username: user.username,
        lastName: user.last_name,
        email: user.email,
        plainPassword: user.password,
        company: user.company.value,
        roleUsers: [user.role.value]
      }
      this.disableAPI = true
      this.$http.put(api.URLS.user + '/' + id, userData, api.headersAuthSettings)
        .then((res) => {
          this.disableAPI = false
          console.log(res)
          this.discardСhanges(id)
          for (let i = 0; i < this.editedUsers.length; i++) {
            if (this.editedUsers[i].id === id && this.editedUsers[i].type === 'show') {
              let updatedData = res.body
              updatedData.type = 'show'
              this.editedUsers[i] = updatedData
              break
            }
          }
        })
        .catch((err) => {
          this.disableAPI = false
          console.log(err)
        })
    },
    initAction (name, payload) {
      this.confirmation.action = name
      Object.keys(payload).forEach((key) => {
        this.confirmation[key] = payload[key]
      })
      this.confirmation.isShown = true
    },
    clearAction () {
      this.confirmation.isShown = false
      Object.keys(this.confirmation).forEach((key) => {
        if (key !== 'isShown' && key !== 'style') {
          this.confirmation[key] = null
        }
      })
    },
    confirmActionHandler () {
      let self = this
      switch (this.confirmation.action) {
        case 'removeUserById':
          removeUserById(this.confirmation.userId)
          break
        case 'changeUserStatus':
          changeUserStatus(this.confirmation.userId, this.confirmation.userStatus)
          break
      }
      function removeUserById (id) {
        self.clearAction()
        self.$http.delete(api.URLS.user + '/' + id, api.headersAuthSettings)
          .then((res) => {
            console.log(res)
            for (let i = 0; i < self.users.length; i++) {
              if (self.users[i].id === id) {
                self.users.splice(i, 1)
                break
              }
            }
            alert('Successfully removed')
          })
          .catch((err) => console.log(err))
      }
      function changeUserStatus (id, status) {
        self.clearAction()
        let data = {
          user: {
            enabled: status
          }
        }
        self.$http.put(api.URLS.enabled + '/' + id, data, api.headersAuthSettings)
          .then((res) => {
            console.log(res)
            for (let i = 0; i < self.users.length; i++) {
              if (self.users[i].id === id && self.users[i].type === 'show') {
                self.users[i].enabled = res.body.enabled
                break
              }
            }
            alert('Successfully updated')
          })
          .catch((err) => console.log(err))
      }
    }
  },
  computed: {
    ...mapGetters([
      'getCompaniesForSelect',
      'getRolesForSelect'
    ]),
    filteredUsers () {
      return this.users.filter((user) => (user.username + ' ' + user.last_name).toLowerCase().indexOf(this.searchString.toLowerCase()) > -1)
        .filter((user) => this.company === null || (user.company && user.company.id === this.company.value))
        .filter((user) => this.role === null || (user.role_users.length && user.role_users[0].id === this.role.value))
    }
  },
  watch: {
    filteredUsers () {
      let editedUsers = []
      this.filteredUsers.forEach((user) => {
        user.type = 'show'
        editedUsers.push(user)
        editedUsers.push({
          type: null,
          id: user.id,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          company: {
            value: user.company ? user.company.id : '',
            label: user.company ? user.company.name : ''
          },
          role: {
            value: user.role_users.length ? user.role_users[0].id : '',
            label: user.role_users.length ? user.role_users[0].name : ''
          },
          password: ''
        })
      })
      this.editedUsers = editedUsers
    },
    'confirmation.isShown' (value) {
      if (value) {
        this.confirmation.style.top = window.pageYOffset - 100 + 'px'
      }
    }
  },
  mounted () {
    this.fetchAllContentByScroll(1, 2000)
    this.getRoles()
    this.getCompanies()
  },
  destroyed () {
  }
}
</script>

<style src='@/assets/scss/components/users-list.scss' lang='scss' scoped />

