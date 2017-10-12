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
        <div class="form-group">
          <div class="form-element form-element--half">
            <label for="new-user-name" class="form-label">Name</label>
            <input type="text"
                   class="form-control"
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
          <div class="form-element form-element--half">
            <label for="new-user-surname" class="form-label">Surname</label>
            <input type="text"
                   id="new-user-surname"
                   class="form-control"
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
        <div class="form-elements">
          <div class="form-element">
            <label for="new-user-email" class="form-label">Email</label>
            <input type="text"
                   class="form-control"
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
        <div class="form-group">
          <div class="form-element form-element--half">
            <label for="new-user-company-name" class="form-label">Company name</label>
            <v-select
              :searchable = false
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
          <div class="form-element form-element--half">
            <label for="new-user-company-role" class="form-label">Company role</label>
            <v-select
              :searchable = false
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
        <div class="form-group">
          <div class="form-element form-element--half">
            <label for="new-user-password" class="form-label">Password</label>
            <input type="password"
                   class="form-control"
                   v-model="newUser.password"
                   id="new-user-password"
                   name="Password"
                   placeholder="Insert password"
                   v-validate="'required'">
            <div
              v-if="errors.has('Password')"
              class="add-new-user-body-row-half-body-errors">{{ errors.first('Password') }}
            </div>
          </div>
          <div class="form-element form-element--half">
          </div>
        </div>
        <div class="add-new-user-server-validation" v-if="serverValidation.errors.length">
          <span v-for="error in serverValidation.errors">{{error}}</span>
        </div>
        <div class="add-new-user-control-panel">
          <button type="button" @click="hideAddNewUserForm">Cancel</button>
          <button type="button" @click="createNewUser()">
            <!--<icon name="plus"></icon>-->
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
        <div class="users-list-statusbar"  v-if="!selectedFilters.length">
          <div class="users-list-statusbar__contains users-list-statusbar__block">{{usersSum}} users</div>
          <ul class="users-list-statuses users-list-statusbar__block">
            <li v-for="item in statusbar.data"
              class="users-list-statuses__item"
              :style="{color: item.name === 'User' ? '#b70a37' : '#0a74b7'}"
            >{{item.c + ' ' + item.name}}</li>
          </ul>
        </div>
        <div class="users-list-selected-filters" v-if="selectedFilters.length" :style="statusbar.filter.isHover ? statusbar.filter.style : ''">
          <div class="users-list-selected-filters-remove-all"
               @click="removeAllFilters"
               @mouseover="statusbar.filter.isHover = true"
               @mouseleave="statusbar.filter.isHover = false"
               :style="statusbar.filter.isHover ? statusbar.filter.style : ''">
            <span>{{statusbar.filter.isHover ? 'Remove all filters' : 'Aplied filters'}}</span>
          </div>
          <div class="users-list-selected-filters-body">
            <button v-for="filter in selectedFilters"
                    type="button"
                    @click="removeSelectedFilters(filter)"
                    @mouseover="addHoverElement([filter])"
                    @mouseleave="removeHoverElements"
                    :class="{'hover-filter-element': isExist(filter)}">
              <span>{{filter.label}}</span>
              <icon name="times"></icon>
            </button>
          </div>
        </div>
        <div class="users-list-add">
          <button type="button" class="users-list-add__btn" @click="newUserForm.isShown = true">
            <!--<icon name="plus"></icon>-->
            <span>Add new user</span>
          </button>
        </div>
      </div>
      <div class="users-list-body">
        <table class="table table-data">
          <thead>
          <tr>
            <th class="cellpadding column-id-head table-head-ceil">ID</th>
            <th class="users-list-search-col text-left column-search-head table-head-ceil">
              <div class="table-search-wrap">
                <div class="wrap-input">
                  <input
                    v-model="searchString"
                    type="search"
                    class="table-search"
                    placeholder="Search in users by name or surname..." />
                </div>
                <div class="wrap-search-icon">
                  <icon name="search"></icon>
                </div>
              </div>
            </th>
            <th class="column-email-head table-head-ceil">
              <span>Email</span>
            </th>
            <th class="column-company-head table-head-hover table-head-ceil"
                :class="{'left-active-ceil-head': filerTableHead.selectedCeil === 2,
                'active-ceil-head': filerTableHead.selectedCeil === 1,
                'hover-head-ceil': isExistInOptions(getCompaniesForSelect)}"
                @mouseover="addHoverElement(getCompaniesForSelect)"
                @mouseleave="removeHoverElements">
              <div class="caption-head">
                <div class="caption-head-text" @click.stop="showHideSubMenu(1)">
                  <span class="caption-head-inner-text">Company</span>
                </div>
                <div class="caption-head-icon">
                  <span class="active-chevron" v-if="filerTableHead.selectedCeil === 1">
                    <icon
                      name="chevron-up"
                    ></icon>
                  </span>
                  <span class="passive-chevron" v-if="filerTableHead.selectedCeil !== 1">
                    <icon
                      name="chevron-down"
                    ></icon>
                  </span>
                </div>
              </div>
              <div class="wrap-dropdown-table-head"
                   id="sub-menu-1"
                   v-show="filerTableHead.selectedCeil === 1"
                   tabindex="-1"
                   @click.stop="">
                <app-select placeholder="Search here ..."
                        :options="getCompaniesForSelect"
                        v-model="company" />
              </div>
            </th>
            <th class="column-role-head table-head-hover table-head-ceil"
                :class="{'active-ceil-head': filerTableHead.selectedCeil === 1,
                'hover-head-ceil': isExistInOptions(getRolesForSelect)}"
                @mouseover="addHoverElement(getRolesForSelect)"
                @mouseleave="removeHoverElements">
              <div class="caption-head">
                <div class="caption-head-text" @click.stop="showHideSubMenu(2)">
                  <span class="caption-head-inner-text">Role</span>
                </div>
                <div class="caption-head-icon">
                  <span class="active-chevron" v-if="filerTableHead.selectedCeil === 2">
                    <icon
                      name="chevron-up"
                    ></icon>
                  </span>
                  <span class="passive-chevron" v-if="filerTableHead.selectedCeil !== 2">
                    <icon
                      name="chevron-down"
                    ></icon>
                  </span>
                </div>
              </div>
              <div class="wrap-dropdown-table-head"
                   id="sub-menu-2"
                   v-show="filerTableHead.selectedCeil === 2"
                   tabindex="-1"
                   @click.stop="">
                <app-select placeholder="Search here ..."
                        :options="getRolesForSelect"
                        v-model="role" />
              </div>
            </th>
            <th class="column-last-active-head table-head-ceil">
              <span>Last active</span>
            </th>
            <th colspan="3" class="cellpadding column-actions-head table-head-ceil">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(user, i) in editedUsers">
            <td class="text-center cellpadding" v-if="user.type === 'show'">
              <!--<input type="checkbox" :id="user.id"/>-->
              <!--<label :for="user.id">{{user.id}}</label>-->
              {{user.id}}
            </td>
            <td class="cellpadding" v-if="user.type === 'show'">{{user.username + ' ' + user.last_name}}</td>
            <td class="cellpadding" v-if="user.type === 'show'">{{user.email}}</td>
            <td class="cellpadding" v-if="user.type === 'show'">{{user.company ? user.company.name : ''}}</td>
            <td class="cellpadding" v-if="user.type === 'show'"> {{user.role_users.length ? user.role_users[0].name : ''}}</td>
            <td class="cellpadding" v-if="user.type === 'show'">3 hours ago</td>
            <td class="cellpadding text-center" v-if="user.type === 'show'">
              <button
                type="button"
                class="table-crud-btn icon-btn"
                @click="showEditableForm(user.id)">
                <icon name="pencil"/>
                <span class="table-tooltip-edit">Edit</span>
              </button>
            </td>
            <td class="cellpadding text-center" v-if="user.type === 'show'">
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
            <td class="cellpadding text-center" v-if="user.type === 'show'">
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
                      :searchable = false
                      placeholder="Select company" />
                  </div>
                  <div class="edit-user-row-ceil">
                    <v-select
                      v-model="user.role"
                      :options="getRolesForSelect"
                      v-validate="'required'"
                      data-vv-name="userCompanyRole"
                      data-vv-as="Company Role"
                      :searchable = false
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
    <app-spiner v-if="false" />
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
import AppSelect from '@/components/admin/common/Select'

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
      },
      hoverElements: [],
      filerTableHead: {
        selectedCeil: null
      },
      statusbar: {
        data: [],
        filter: {
          isHover: false,
          style: {
            backgroundColor: '#fffdd8',
            borderColor: '#000'
          }
        }
      }
    }
  },
  methods: {
    ...mapActions([
      'getRoles',
      'getCompanies',
      'setInformationMsg'
    ]),
    fetchAllContentByScroll (page, limit) {
      this.$http.get(api.URLS.users + '?limit=' + limit + '&page=' + page, api.headersAuthSettings)
        .then((res) => {
          console.log(res)
          this.users = res.body.data.items
          this.statusbar.data = res.body.count ? res.body.count : []
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
          let infMsg = 'User has been successfully created'
          this.setInformationMsg({text: infMsg, className: 'success'})
        })
        .catch((err) => {
          this.serverValidation.errors = err.body
          console.log(err)
          let infMsg = "User has't been successfully created"
          this.setInformationMsg({text: infMsg, className: 'danger'})
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
              let updatedData = res.body.data
              updatedData.type = 'show'
              this.editedUsers[i] = updatedData
              break
            }
          }
          this.statusbar.data = res.body.count ? res.body.count : []
          let infMsg = 'User has been successfully updated'
          this.setInformationMsg({text: infMsg, className: 'success'})
        })
        .catch((err) => {
          let infMsg = "User has't been successfully created"
          this.setInformationMsg({text: infMsg, className: 'success'})
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
            self.statusbar.data = res.body.count ? res.body.count : []
            let infMsg = 'User has been successfully removed'
            self.setInformationMsg({text: infMsg, className: 'success'})
          })
          .catch((err) => {
            console.log(err)
            let infMsg = "User has't been successfully removed"
            self.setInformationMsg({text: infMsg, className: 'danger'})
          })
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
            let infMsg = 'User has been successfully updated'
            self.setInformationMsg({text: infMsg, className: 'success'})
          })
          .catch((err) => {
            console.log(err)
            let infMsg = "User has't been successfully updated"
            self.setInformationMsg({text: infMsg, className: 'danger'})
          })
      }
    },
    addHoverElement (elements) {
      console.log(elements)
      this.hoverElements = elements
    },
    removeHoverElements () {
      this.hoverElements = []
    },
    isExist (element) {
      let el = this.hoverElements.find(item => {
        if ((element.value === item.value || item.value === null) && element.label === item.label) {
          return true
        }
      })
      return !!el
    },
    isExistInOptions (options) {
      let hoverElement = this.hoverElements.length ? this.hoverElements[0] : {}
      let el = options.find(item => {
        if ((hoverElement.value === item.value || hoverElement.value === null) && hoverElement.label === item.label) {
          return true
        }
      })
      return !!el
    },
    removeSelectedFilters (filter) {
      if (this.role && this.role.label === filter.label && this.role.value === filter.value) {
        this.role = null
      }
      if (this.company && this.company.label === filter.label && this.company.value === filter.value) {
        this.company = null
      }
    },
    removeAllFilters () {
      this.role = null
      this.company = null
    },
    showHideSubMenu (num) {
      if (!this.filerTableHead.selectedCeil) {
        this.filerTableHead.selectedCeil = num
      } else {
        this.filerTableHead.selectedCeil === num ? this.filerTableHead.selectedCeil = null : this.filerTableHead.selectedCeil = num
      }
    },
    hideSubMenuTableHead (e) {
      this.filerTableHead.selectedCeil = null
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
    },
    usersSum () {
      let count = 0
      this.statusbar.data.forEach(item => {
        count = count + +item.c
      })
      return count
    },
    selectedFilters () {
      let filters = []
      if (this.company) {
        filters.push(this.company)
      }
      if (this.role) {
        filters.push(this.role)
      }
      return filters
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
  components: {
    AppSelect
  },
  mounted () {
    this.fetchAllContentByScroll(1, 2000)
    this.getRoles()
    this.getCompanies()
    document.addEventListener('click', this.hideSubMenuTableHead)
  },
  destroyed () {
    document.addEventListener('click', this.hideSubMenuTableHead)
  }
}
</script>

<style src='@/assets/scss/components/users-list.scss' lang='scss' scoped />

