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
    <!-- .articles-list -->
    <div class="articles-list">
      <!-- .articles-list-heading -->
      <div class="articles-list-heading">
        <!-- .articles-list-actions -->
        <div class="articles-list-actions">
          <!-- .articles-list-inputwrap -->
          <div class="articles-list-inputwrap">
            <input type="checkbox" class="articles-list-input" />
          </div>
          <!-- END:.articles-list-inputwrap -->
          <v-select
            placeholder="Bulk action"
            v-model="selectedAction"
            :options="getArticleListActions" />
        </div>
        <!-- END:.articles-list-actions -->
        <!-- .articles-list-statusbar -->
        <div class="articles-list-statusbar" v-if="!selectedFilters.length">
          <!-- .articles-list-statusbar__contains -->
          <div class="articles-list-statusbar__contains articles-list-statusbar__block">Library contains {{+statusbar.published + +statusbar.archived + +statusbar.draft}} Articles</div>
          <!-- END:.articles-list-statusbar__contains -->
          <!-- .articles-list-statuses -->
          <ul class="articles-list-statuses articles-list-statusbar__block">
            <li class="articles-list-statuses__item status--published">{{statusbar.published}} Published</li>
            <li class="articles-list-statuses__item status--archived">{{statusbar.archived}} Archived</li>
            <li class="articles-list-statuses__item status--draft">{{statusbar.draft}} Draft</li>
          </ul>
          <!-- END:.articles-list-statuses -->
        </div>
        <!-- END:.articles-list-statusbar -->
        <div class="articles-list-selected-filters" v-if="selectedFilters.length" :style="statusbar.filter.isHover ? statusbar.filter.style : ''">
          <div class="articles-list-selected-filters-remove-all"
               @click="removeAllFilters"
               @mouseover="statusbar.filter.isHover = true"
               @mouseleave="statusbar.filter.isHover = false"
               :style="statusbar.filter.isHover ? statusbar.filter.style : ''">
            <span>{{statusbar.filter.isHover ? 'Remove all filters' : 'Aplied filters'}}</span>
          </div>
          <div class="articles-list-selected-filters-body">
            <button v-for="filter in selectedFilters"
                    type="button"
                    @click="removeSelectedFilters(filter)"
                    :class="{hover: isExist(filter)}">
              <span>{{filter.label}}</span>
              <icon name="times"></icon>
            </button>
          </div>
        </div>
        <div class="articles-list-add">
          <router-link
            :to="{name: 'add-article'}"
            class="icon-btn articles-list-add__btn">
            <!--<icon name="plus" />-->
            <span>Add new article</span>
          </router-link>
        </div>
      </div>
      <!-- END:.articles-list-heading -->
      <!-- .articles-list-body -->
      <div class="articles-list-body">
        <!-- .table table-data -->
        <table class="table table-data">
          <thead>
          <tr>
            <th class="cellpadding column-id-head">ID</th>
            <th class="articles-list-search-col text-left column-search-head">
              <div class="table-search-wrap">
                <div class="wrap-input">
                  <input
                    v-model="search"
                    @input="mainSearch(1, 20)"
                    type="search"
                    class="table-search"
                    placeholder="Search in articles..." />
                </div>
                <div class="wrap-search-icon">
                  <icon name="search"></icon>
                </div>
              </div>
            </th>
            <th class="column-lng-head"
              @mouseover="addHoverElement(getLanguagesForSelect)"
              @mouseleave="removeHoverElements">
              <v-select placeholder="Language"
                        :options="getLanguagesForSelect"
                        :class="'hide-selected-items'"/>
            </th>
            <th class="column-type-head"
                @mouseover="addHoverElement(getContentTypeForSelect)"
                @mouseleave="removeHoverElements" >
              <v-select placeholder="Type"
                        v-model="contentType"
                        :options="getContentTypeForSelect"
                        :multiple="true"
                        :class="'hide-selected-items'"/>
            </th>
            <th class="column-topics-head"
                @mouseover="addHoverElement(getTagsForSelect)"
                @mouseleave="removeHoverElements">
              <v-select placeholder="Topics"
                        :options="getTagsForSelect"
                        v-model="tags"
                        :multiple="true"
                        :class="'hide-selected-items'"/>
            </th>
            <th class="column-categories-head"
                @mouseover="addHoverElement(getCategoriesForSelect)"
                @mouseleave="removeHoverElements">
              <v-select placeholder="Category"
                        :options="getCategoriesForSelect"
                        v-model="categories"
                        :multiple="true"
                        :class="'hide-selected-items'"/>
            </th>
            <th class="column-access-head"
                @mouseover="addHoverElement(getRolesForSelect)"
                @mouseleave="removeHoverElements">
              <v-select placeholder="Access"
                        :options="getRolesForSelect"
                        v-model="roles"
                        :multiple="true"
                        :class="'hide-selected-items'"
              />
            </th>
            <th class="column-companies-head"
                @mouseover="addHoverElement(getCompaniesForSelect)"
                @mouseleave="removeHoverElements">
              <v-select placeholder="Comp spec"
                        :options="getCompaniesForSelect"
                        v-model="companies"
                        :multiple="true"
                        :class="'hide-selected-items'"
              />
            </th>
            <th class="column-last-edited-head">
              <span @click="datepicker.isShown = !datepicker.isShown">Last Edited</span>
              <div class="datepicker" v-if="datepicker.isShown">
                <div class="datepicker-statusbar">
                  <div class="datepicker-statusbar-half">
                    <div class="datepicker-statusbar-half-inner">
                      <span>From</span>
                      <div class="datepicker-statusbar-half-input">{{convertDate(datepicker.from, '/')}}</div>
                    </div>
                  </div>
                  <div class="datepicker-statusbar-half">
                    <div class="datepicker-statusbar-half-inner">
                      <span>To</span>
                      <div class="datepicker-statusbar-half-input">{{convertDate(datepicker.to, '/')}}</div>
                    </div>
                  </div>
                </div>
                <div class="datepicker-calendar">
                  <div class="datepicker-calendar-half">
                    <datepicker
                      :inline="true"
                      v-model="datepicker.from"
                      :format="'dd MM yyyy'"
                    />
                  </div>
                  <div class="datepicker-calendar-half">
                    <datepicker
                      :inline="true"
                      v-model="datepicker.to"
                      :format="'dd MM yyyy'"
                    />
                </div>
                </div>
                <div class="datepicker-control-panel">
                  <button type="button" @click="changeDateFilter">Ok</button>
                </div>
              </div>
            </th>
            <th class="column-author-head"
                @mouseover="addHoverElement(lastEditorsOptions)"
                @mouseleave="removeHoverElements">
              <v-select
                :debounce="250"
                :on-search="getOptionsLastEditors"
                :options="lastEditorsOptions"
                :multiple="true"
                v-model="lastEditors"
                :class="'hide-selected-items'"
                placeholder="Upl/Edit"
              />
            </th>
            <th class="column-status-head"
                @mouseover="addHoverElement(statusOptions)"
                @mouseleave="removeHoverElements">
              <v-select placeholder="Status"
                        v-model="status"
                        :options="statusOptions"
                        :multiple="true"
                        :class="'hide-selected-items'"/>
            </th>
            <th colspan="3" class="cellpadding column-actions-head">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(article, i) in articles">
            <td class="text-center cellpadding">
              <!--<input type="checkbox" :id="article.id"/>-->
              <label :for="article.id">{{article.id}}</label>
            </td>
            <td class="cellpadding">{{article.title}}</td>
            <td class="cellpadding text-center">{{article.language ? article.language.name : ''}}</td>
            <td class="cellpadding text-center">{{article.content_type.type}}</td>
            <td class="cellpadding text-center">{{article.tags.length ? article.tags[0].name : ''}}</td>
            <td class="cellpadding text-center">{{article.categories.length ? article.categories[0].title : ''}}</td>
            <td class="cellpadding text-center" v-html="articleRoles(article.roles)">
            </td>
            <td class="cellpadding text-center">{{article.companies.length ? article.companies[0].name : ''}}</td>
            <td class="cellpadding text-center">{{convertDate(article.updated_at, '.')}}</td>
            <td class="cellpadding text-center">{{article.user.username + ' ' + article.user.last_name}}</td>
            <td class="cellpadding text-center">
              <span class="status" :class="{'status--archived': article.status === 2, 'status--published': article.status === 1, 'status--draft': article.status === 0}">{{getStatus(article.status)}}</span>
            </td>
            <td class="cellpadding">
              <button
                type="button"
                class="table-crud-btn icon-btn"
                @click="editArticle(article.id)">
                <icon name="pencil"/>
              </button>
            </td>
            <td class="cellpadding">
              <button
                type="button"
                class="table-crud-btn icon-btn"
                v-if="article.status !== 2"
                @click="initAction('changeStatusArticle', {articleId: article.id, status: 2, i: i})">
                <icon name="folder" />
              </button>
              <button
                type="button"
                class="table-crud-btn icon-btn"
                v-if="article.status === 2"
                @click="initAction('changeStatusArticle', {articleId: article.id, status: 1, i: i})">
                <icon name="rotate-right" />
              </button>
            </td>
            <td class="cellpadding">
              <button
                type="button"
                class="table-crud-btn icon-btn"
                @click="initAction('removeArticle', {articleId: article.id, i: i})">
                <icon name="times" />
              </button>
            </td>
          </tr>
          </tbody>
        </table>
        <!-- END:.table table-data -->
      </div>
      <!-- END:.articles-list-body -->
      <!--<div class="wrap-loading-spiner">-->
        <!--<span>Loading...</span>-->
      <!--</div>-->
    </div>
    <app-spiner v-if="isLoading" />
    <!-- END:.articles-list -->
  </div>
</template>

<script>
import api from '@/api'
import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/search'
import 'vue-awesome/icons/pencil'
import 'vue-awesome/icons/folder'
import 'vue-awesome/icons/times'
import 'vue-awesome/icons/chevron-up'
import 'vue-awesome/icons/chevron-down'
import 'vue-awesome/icons/rotate-right'
// import DPicker from '@/components/admin/article/components/vue.datepicker.min.js'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'articles-list',
  data () {
    return {
      articles: [],
      getArticleListActions: ['Action 1', 'Action 2', 'Action 3'],
      selectedAction: null,
      lngs: ['English (UK)', 'English (US)'],
      confirmation: {
        action: '',
        isShown: false,
        articleId: null,
        i: null,
        style: {
          top: '100px'
        }
      },
      contentAutoloadInfo: {
//        curPage: 1,
        numPages: 1,
        locked: false
      },
      search: '',
      contentType: [],
      tags: [],
      categories: [],
      roles: [],
      companies: [],
      lastEdited: [],
      lastEditors: [],
      status: [],
      statusOptions: [],
      lastEditorsOptions: [],
      datepicker: {
        isShown: false,
        from: null,
        to: null
      },
      statusbar: {
        published: 0,
        archived: 0,
        draft: 0,
        filter: {
          isHover: false,
          style: {
            backgroundColor: '#fffdd8',
            borderColor: '#000'
          }
        }
      },
      isLoading: true,
      hoverElements: []
    }
  },
  methods: {
    ...mapActions([
      'getTypes',
      'getTags',
      'getCategories',
      'getCompanies',
      'getRoles',
      'getLngs'
    ]),
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
        case 'removeArticle':
          removeArticle(this.confirmation.articleId, this.confirmation.i)
          break
        case 'changeStatusArticle':
          changeStatusArticle(this.confirmation.articleId, this.confirmation.status, this.confirmation.i)
          break

      }
      function removeArticle (articleId, i) {
        self.clearAction()
        self.$http.delete(api.URLS.content + '/' + articleId, api.headersAuthSettings)
          .then((res) => {
            self.clearAction()
            self.articles.splice(i, 1)
            alert('Article has been successfully removed')
          })
          .catch((err) => console.log(err))
      }
      function changeStatusArticle (articleId, status, i) {
        self.clearAction()
        let body = {
          status: status,
          isArticle: true
        }
        self.$http.post(api.URLS.changeStatus + '/' + articleId, body, api.headersAuthSettings)
          .then((res) => {
            self.clearAction()
            let status = res.body.data.status
            self.articles[i].status = status
// set article count
            let statuses = res.body.statuses
            self.statusbar.published = statuses.Published.count
            self.statusbar.draft = statuses.Draft.count
            self.statusbar.archived = statuses.Archived.count
            console.log(res)
          })
          .catch((err) => console.log(err))
      }
    },
    // TODO: Change scrool handler make cur page different for different search typeFdelete
    handleScroll (event) {
      if (!this.articles.length) return
      let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight)
      let fullScrolledValue = window.pageYOffset + window.innerHeight

      if (fullScrolledValue > scrollHeight - 200) {
//        this.contentAutoloadInfo.locked = true
        if (this.search) {
          console.log('Autoload mainSearch')
//          this.mainSearch(++this.contentAutoloadInfo.curPage, 20)
        } else {
          console.log('Autoload searchByParams')
          let nextPage = this.contentAutoloadInfo.curPage + 1
          this.searchByParams(nextPage, 20)
        }
      }
    },
//    fetchAllContentByScroll (page, limit) {
//      this.$http.get(api.URLS.content + '?page=' + page + '&limit=' + limit, api.headersAuthSettings)
//        .then((res) => {
//          this.contentInfo.curPage = res.body.current_page_number
//          this.articles = [...this.articles, ...res.body.items]
//          this.contentInfo.locked = false
//          console.log(res)
//        })
//        .catch((err) => {
//          this.contentInfo.locked = false
//          console.log(err)
//        })
//    },
    editArticle (id) {
      this.$router.push({path: `/admin/article/edit/${id}`})
    },
    mainSearch (page, limit) {
      if (!this.search) {
        this.searchByParams(1, 20)
        return
      }
      let subTag = ''
      this.tags.forEach((tag, i) => {
        subTag += `&tags[${i}]=${tag.value}`
      })
      let subCategories = ''
      this.categories.forEach((category, i) => {
        subCategories += `&categories[${i}]=${category.value}`
      })
// filter by contentType
      let subContentType = ''
      this.contentType.forEach((item, i) => {
        subContentType += `&contentType[${i}]=${item.value}`
      })
// filter by roles
      let subRole = ''
      this.roles.forEach((role, i) => {
        subRole += `&roles[${i}]=${role.value}`
      })
      let subCompany = ''
      this.companies.forEach((company, i) => {
        subCompany += `&companies[${i}]=${company.value}`
      })
// filter by time
      let subLastEdited = ''
      this.lastEdited.forEach((item) => {
        if (item.from) {
          subLastEdited += `&from=${item.from}`
        }
        if (item.to) {
          subLastEdited += `&to=${item.to}`
        }
      })
// filter by lastEditors
      let subLastEditors = ''
      this.lastEditors.forEach((editor, i) => {
        subLastEditors += `&authorId[${i}]=${editor.value}`
      })
// status
      let subStatus = ''
      this.status.forEach((status, i) => {
        subStatus += `&status[${i}]=${status.value}`
      })
      let urlString = `${api.URLS.search}&search=${this.search + subContentType + subTag + subCategories + subRole + subCompany + subLastEdited + subLastEditors + subStatus}&page=${page}&limit=${limit}&isArticle=true`
      this.contentAutoloadInfo.locked = true
      this.isLoading = true
      this.$http.get(urlString, api.headersAuthSettings)
        .then((res) => {
//          this.contentAutoloadInfo.curPage = res.body.current_page_number
          if (page === 1) {
            this.articles = res.body.data.items ? res.body.data.items : []
          } else {
            this.articles = [...this.articles, ...res.body.items]
          }
          this.contentAutoloadInfo.locked = false
          this.isLoading = false
          console.log('mainSearch', res)
        })
        .catch((err) => {
          this.contentAutoloadInfo.locked = false
          this.isLoading = false
          console.log(err)
        })
    },
    searchByParams (page, limit) {
      this.contentAutoloadInfo.curPage = page
      if (this.contentAutoloadInfo.locked || this.contentAutoloadInfo.curPage > this.contentAutoloadInfo.numPages) return
      let body = {
        contentType: this.contentType.map((item) => item.value),
        tags: this.tags.map((item) => item.value),
        categories: this.categories.map((item) => item.value),
        roles: this.roles.map((item) => item.value),
        companies: this.companies.map((item) => item.value),
        isArticle: 1,
        authorId: this.lastEditors.map((item) => item.value),
        status: this.status.map((item) => item.value)
      }
      this.lastEdited.forEach((item) => {
        if (item.from) {
          body.from = item.from
        }
        if (item.to) {
          body.to = item.to
        }
      })
      this.contentAutoloadInfo.locked = true
      this.isLoading = true
      this.$http.post(api.URLS.contentSearch + '?page=' + page + '&limit=' + limit, body, api.headersAuthSettings)
        .then((res) => {
// Set status options
          this.statusOptions = []
          let statusOptions = res.body.status ? res.body.status : {}
          Object.keys(statusOptions).forEach(key => {
            this.statusOptions.push({
              label: key,
              value: +statusOptions[key].id
            })
          })
//
          console.log('searchByParams', res)
          this.contentAutoloadInfo.curPage = res.body.data.current_page_number
          this.contentAutoloadInfo.numPages = Math.ceil(res.body.data.total_count / limit) !== 0 ? Math.ceil(res.body.data.total_count / limit) : 1
          if (page === 1) {
            this.articles = res.body.data.items
          } else {
            this.articles = [...this.articles, ...res.body.data.items]
          }
// set article count
          let count = res.body.status
          this.statusbar.published = count.Published.count
          this.statusbar.draft = count.Draft.count
          this.statusbar.archived = count.Archived.count
          this.contentAutoloadInfo.locked = false
          this.isLoading = false
        })
        .catch((err) => {
          this.contentAutoloadInfo.locked = false
          this.isLoading = false
          console.log(err)
        })
    },
    getStatus (st) {
      switch (st) {
        case 0:
          return 'Draft'
        case 1:
          return 'Published'
        case 2:
          return 'Archived'
        default:
          return ''
      }
    },
    removeSelectedFilters (filter) {
      console.log(filter)
      this.contentType.forEach((item, i) => {
        if (item.value === filter.value && item.label === filter.label) {
          this.contentType.splice(i, 1)
          return
        }
      })
      this.categories.forEach((item, i) => {
        if (item.value === filter.value && item.label === filter.label) {
          this.categories.splice(i, 1)
          return
        }
      })
      this.tags.forEach((item, i) => {
        if (item.value === filter.value && item.label === filter.label) {
          this.tags.splice(i, 1)
          return
        }
      })
      this.roles.forEach((item, i) => {
        if (item.value === filter.value && item.label === filter.label) {
          this.roles.splice(i, 1)
          return
        }
      })
      this.companies.forEach((item, i) => {
        if (item.value === filter.value && item.label === filter.label) {
          this.companies.splice(i, 1)
          return
        }
      })
// Last edited
      this.lastEdited.forEach((item, i) => {
        if (item.id === null && item.label === filter.label) {
          this.lastEdited.splice(i, 1)
          return
        }
      })
// Last editors
      this.lastEditors.forEach((item, i) => {
        if (item.value === filter.value && item.label === filter.label) {
          this.lastEditors.splice(i, 1)
          return
        }
      })
// Status
      this.status.forEach((item, i) => {
        if (item.value === filter.value && item.label === filter.label) {
          this.status.splice(i, 1)
          return
        }
      })
    },
    removeAllFilters () {
      this.contentType = []
      this.categories = []
      this.tags = []
      this.roles = []
      this.companies = []
      this.lastEdited = []
      this.lastEditors = []
      this.status = []
    },
    convertDate (payload, delimetr) {
      if (!payload) return
      let date = new Date(payload)
      let fullYear = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      function toDoubleDigit (num) {
        return num.toString().length < 2 ? '0' + num : num.toString()
      }
      return toDoubleDigit(day) + delimetr + toDoubleDigit(month) + delimetr + fullYear
    },
    changeDateFilter () {
      this.datepicker.isShown = false
      if (!this.datepicker.from && !this.datepicker.to) return
      let label = (this.datepicker.from ? this.convertDate(this.datepicker.from, '.') : 'n/a') +
        ' - ' + (this.datepicker.to ? this.convertDate(this.datepicker.to, '.') : 'n/a')
      this.lastEdited = [{
        label,
        id: null,
        from: this.datepicker.from ? convertDate(this.datepicker.from, '-') : null,
        to: this.datepicker.to ? convertDate(this.datepicker.to, '-') : null
      }]
      function convertDate (payload, delimetr) {
        if (!payload) return
        let date = new Date(payload)
        let fullYear = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        return fullYear + delimetr + toDoubleDigit(month) + delimetr + toDoubleDigit(day)
        function toDoubleDigit (num) {
          return num.toString().length < 2 ? '0' + num : num.toString()
        }
      }
    },
    getOptionsLastEditors (search, loading) {
      loading(true)
      let body = {
        name: search
      }
      this.$http.post(api.URLS.usersSearch, body, api.headersAuthSettings)
        .then((res) => {
          console.log(res)
          let users = res.body.items ? res.body.items : []
          this.lastEditorsOptions = users.map(user => {
            return {
              value: user.id,
              label: user.username + ' ' + user.last_name
            }
          })
          loading(false)
        })
        .catch((err) => {
          console.log(err)
          loading(false)
        })
    },
    initSearch () {
      this.search ? this.mainSearch(1, 20) : this.searchByParams(1, 20)
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
        if (element.value === item.value && element.label === item.label) {
          return true
        }
      })
      return !!el
    },
    articleRoles (roles) {
      let string = ''
      roles.forEach(role => {
        string += role.name + '</br>'
      })
      return string
    }
  },
  computed: {
    ...mapGetters([
      'types',
      'getCategoriesTitle',
      'getTagTitles',
      'getContentTypeForSelect',
      'getTagsForSelect',
      'getCategoriesForSelect',
      'getRolesForSelect',
      'getCompaniesForSelect',
      'getLanguagesForSelect'
    ]),
    selectedFilters () {
      return [...this.contentType, ...this.categories, ...this.tags, ...this.roles, ...this.companies, ...this.lastEdited, ...this.lastEditors, ...this.status]
    }
  },
  watch: {
    contentType () {
      this.initSearch()
    },
    categories () {
      this.initSearch()
    },
    tags () {
      this.initSearch()
    },
    roles () {
      this.initSearch()
    },
    companies () {
      this.initSearch()
    },
    lastEdited () {
      this.initSearch()
    },
    lastEditors () {
      this.initSearch()
    },
    status () {
      this.initSearch()
    },
    'confirmation.isShown' (value) {
      if (value) {
        this.confirmation.style.top = window.pageYOffset - 100 + 'px'
      }
    }
  },
  components: {
  },
  mounted () {
    this.getTypes()
    this.searchByParams(1, 20)
    this.getCategories()
    this.getCompanies()
    this.getRoles()
    this.getTags()
    this.getLngs()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style src='@/assets/scss/components/articles-list.scss' lang='scss' scoped />
