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
          <div class="articles-list-statusbar__contains articles-list-statusbar__block">Library contains {{articles.length}} Things to do</div>
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
        <div class="articles-list-selected-filters" v-if="selectedFilters.length">
          <div class="articles-list-selected-filters-remove-all" @click="removeAllFilters">
            <span>Remove all filters</span>
          </div>
          <div class="articles-list-selected-filters-body">
            <button v-for="filter in selectedFilters" type="button" @click="removeSelectedFilters(filter)">
              <span>{{filter.label}}</span>
              <icon name="times"></icon>
            </button>
          </div>
        </div>
        <div class="articles-list-add">
          <router-link
            :to="{name: 'add-todo'}"
            class="icon-btn articles-list-add__btn">
            <!--<icon name="plus" />-->
            <span>Add new TTD</span>
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
                <input
                  v-model="search"
                  @input="mainSearch(1, 20)"
                  type="search"
                  class="table-search"
                  placeholder="Search in TTDs..." />
              </div>
            </th>
            <th class="column-lng-head">
              <v-select placeholder="Lang"
                        :class="'hide-selected-items'"
                        :options="lngs"/>
            </th>
            <th class="column-type-head">
              <v-select placeholder="Type"
                        v-model="contentType"
                        :options="getContentTypeForSelect"
                        :multiple="true"
                        :class="'hide-selected-items'"/>
            </th>
            <th class="column-topics-head">
              <v-select placeholder="Topics"
                        :options="getTagsForSelect"
                        v-model="tags"
                        :multiple="true"
                        :class="'hide-selected-items'"/>
            </th>
            <th class="column-categories-head">
              <v-select placeholder="Category"
                        :options="getCategoriesForSelect"
                        v-model="categories"
                        :multiple="true"
                        :class="'hide-selected-items'"/>
            </th>
            <th class="column-access-head">
              <v-select placeholder="Access"
                        :options="getRolesForSelect"
                        v-model="roles"
                        :multiple="true"
                        :class="'hide-selected-items'"
              />
            </th>
            <th class="column-companies-head">
              <v-select placeholder="Com spec"
                        :options="getCompaniesForSelect"
                        v-model="companies"
                        :multiple="true"
                        :class="'hide-selected-items'"
              />
            </th>
            <th class="column-last-edited-head">
              <span>Last Edited</span>
            </th>
            <th class="column-author-head">
              <v-select placeholder="Upl/Edit"
                        :class="'hide-selected-items'" />
            </th>
            <th class="column-status-head">
              <v-select
                placeholder="Status"
                :class="'hide-selected-items'" />
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
            <td class="cellpadding"></td>
            <td class="cellpadding">{{article.content_type.type}}</td>
            <td class="cellpadding">{{article.tags.length ? article.tags[0].name : ''}}</td>
            <td class="cellpadding">{{article.categories.length ? article.categories[0].title : ''}}</td>
            <td class="cellpadding">Clear assured</td>
            <td class="cellpadding">{{article.companies.length ? article.companies[0].name : ''}}</td>
            <td class="cellpadding">12 hours ago</td>
            <td class="cellpadding">Conan Simpson</td>
            <td class="cellpadding">
              <span class="status status--published">{{getStatus(article.status)}}</span>
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
      statusbar: {
        published: 0,
        archived: 0,
        draft: 0
      }
    }
  },
  methods: {
    ...mapActions([
      'getTypes',
      'getTags',
      'getCategories',
      'getCompanies',
      'getRoles'
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
          changeStatusArticle(this.confirmation)
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
      function changeStatusArticle (data) {
        console.log(data)
// TODO: Wait link from back-end
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
      this.$router.push({path: `/admin/todo/edit/${id}`})
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
      let subContentType = ''
      if (this.contentType.length) {
        subContentType = `&contentType=${this.contentType[0].value}`
      }
      let subRole = ''
      this.roles.forEach((role, i) => {
        subRole += `&roles[${i}]=${role.value}`
      })
      let subCompany = ''
      this.companies.forEach((company, i) => {
        subCompany += `&companies[${i}]=${company.value}`
      })
      let urlString = `${api.URLS.search}&search=${this.search + subContentType + subTag + subCategories + subRole + subCompany}&page=${page}&limit=${limit}&isArticle=false`
      this.$http.get(urlString, api.headersAuthSettings)
        .then((res) => {
//          this.contentAutoloadInfo.curPage = res.body.current_page_number
          if (page === 1) {
            this.articles = res.body.data.items ? res.body.data.items : []
          } else {
            this.articles = [...this.articles, ...res.body.items]
          }
          this.contentAutoloadInfo.locked = false
          console.log('mainSearch', res)
        })
        .catch((err) => {
          this.contentAutoloadInfo.locked = false
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
        isArticle: 0
      }
      this.contentAutoloadInfo.locked = true
      this.$http.post(api.URLS.contentSearch + '?page=' + page + '&limit=' + limit, body, api.headersAuthSettings)
        .then((res) => {
          this.contentAutoloadInfo.curPage = res.body.data.current_page_number
          this.contentAutoloadInfo.numPages = Math.ceil(res.body.data.total_count / limit)
          if (page === 1) {
            this.articles = res.body.data.items
          } else {
            this.articles = [...this.articles, ...res.body.data.items]
          }
// set article count
          let count = res.body.count
          this.statusbar.published = count.Published
          this.statusbar.draft = count.Draft
          this.statusbar.archived = count.Archived
          this.contentAutoloadInfo.locked = false
          console.log('searchByParams', res)
        })
        .catch((err) => {
          this.contentAutoloadInfo.locked = false
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
    },
    removeAllFilters () {
      this.contentType = []
      this.categories = []
      this.tags = []
      this.roles = []
      this.companies = []
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
      'getCompaniesForSelect'
    ]),
    selectedFilters () {
      return [...this.contentType, ...this.categories, ...this.tags, ...this.roles, ...this.companies]
    }
  },
  watch: {
    contentType () {
      this.search ? this.mainSearch(1, 20) : this.searchByParams(1, 20)
    },
    categories () {
      this.search ? this.mainSearch(1, 20) : this.searchByParams(1, 20)
    },
    tags () {
      this.search ? this.mainSearch(1, 20) : this.searchByParams(1, 20)
    },
    roles () {
      this.search ? this.mainSearch(1, 20) : this.searchByParams(1, 20)
    },
    companies () {
      this.search ? this.mainSearch(1, 20) : this.searchByParams(1, 20)
    },
    'confirmation.isShown' (value) {
      if (value) {
        this.confirmation.style.top = window.pageYOffset - 100 + 'px'
      }
    }
  },
  mounted () {
    this.getTypes()
    this.searchByParams(1, 20)
    this.getCategories()
    this.getCompanies()
    this.getRoles()
    this.getTags()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style src='@/assets/scss/components/articles-list.scss' lang='scss' scoped />
